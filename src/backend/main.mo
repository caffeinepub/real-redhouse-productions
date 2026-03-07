import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type ContactFormSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type Role = {
    #Produced;
    #Directed;
    #Assisted;
  };

  type Project = {
    id : Nat;
    title : Text;
    role : Role;
    year : Nat;
    logline : ?Text;
    featured : Bool;
  };

  module Project {
    public func compareByYear(project1 : Project, project2 : Project) : Order.Order {
      Nat.compare(project1.year, project2.year);
    };
  };

  let contactFormSubmissions = Map.empty<Nat, ContactFormSubmission>();
  let projects = Map.empty<Nat, Project>();
  var nextSubmissionId = 0;
  var nextProjectId = 0;

  // Helper function to check admin
  func assertAdmin(caller : Principal) {
    let controllerId = Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai");
    if (not Principal.equal(caller, controllerId)) {
      Runtime.trap("Unauthorized. Only controller can perform this action.");
    };
  };

  // Contact Form
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactFormSubmissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactFormSubmission] {
    assertAdmin(caller);
    contactFormSubmissions.values().toArray();
  };

  // Projects
  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray();
  };

  public query ({ caller }) func getFeaturedProjects() : async [Project] {
    projects.values().toArray().filter(func(p) { p.featured });
  };

  public query ({ caller }) func getProjectsByYear(year : Nat) : async [Project] {
    projects.values().toArray().filter(func(p) { p.year == year });
  };

  public shared ({ caller }) func addProject(
    title : Text,
    role : Role,
    year : Nat,
    logline : ?Text,
    featured : Bool,
  ) : async () {
    assertAdmin(caller);

    let project : Project = {
      id = nextProjectId;
      title;
      role;
      year;
      logline;
      featured;
    };
    projects.add(nextProjectId, project);
    nextProjectId += 1;
  };

  public shared ({ caller }) func updateProject(
    id : Nat,
    title : Text,
    role : Role,
    year : Nat,
    logline : ?Text,
    featured : Bool,
  ) : async () {
    assertAdmin(caller);

    switch (projects.get(id)) {
      case (null) { Runtime.trap("Project not found") };
      case (?_) {
        let updatedProject : Project = {
          id;
          title;
          role;
          year;
          logline;
          featured;
        };
        projects.add(id, updatedProject);
      };
    };
  };

  public shared ({ caller }) func deleteProject(id : Nat) : async () {
    assertAdmin(caller);

    if (not projects.containsKey(id)) {
      Runtime.trap("Project not found");
    };
    projects.remove(id);
  };
};
