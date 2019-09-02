export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  repository: SDK.RepositoryAPI;
  issue: SDK.IssueAPI;
  ticket: SDK.TicketAPI;
  project: SDK.ProjectAPI;
  summary: SDK.SummaryAPI;
  staff: SDK.StaffAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface RepositoryAPI {
    /**
     * List all all repositories
     */
    listRepositories(req: ListRepositoriesRequest): Promise<ListRepositoriesResponse>;
    /**
     * Find repository by id
     */
    getRepository(req: GetRepositoryRequest): Promise<GetRepositoryResponse>;
  }
  export interface IssueAPI {
    /**
     * List all all issues
     */
    listIssues(req: ListIssuesRequest): Promise<ListIssuesResponse>;
    /**
     * Find issue by id and driver
     */
    getIssue(req: GetIssueRequest): Promise<GetIssueResponse>;
  }
  export interface TicketAPI {
    /**
     * Create a ticket
     */
    createTicket(req: CreateTicketRequest): Promise<CreateTicketResponse>;
    /**
     * List all all tickets
     */
    listTickets(req: ListTicketsRequest): Promise<ListTicketsResponse>;
    /**
     * Find ticket by id
     */
    getTicket(req: GetTicketRequest): Promise<GetTicketResponse>;
    /**
     * Delete ticket
     */
    deleteTicket(req: DeleteTicketRequest): Promise<DeleteTicketResponse>;
    /**
     * Create ticket event
     */
    createTicketEvent(req: CreateTicketEventRequest): Promise<CreateTicketEventResponse>;
  }
  export interface ProjectAPI {
    /**
     * List all interations of project
     */
    listInterations(req: ListInterationsRequest): Promise<ListInterationsResponse>;
    /**
     * Create a interation
     */
    createInteraction(req: CreateInteractionRequest): Promise<CreateInteractionResponse>;
    /**
     * Find interation by id
     */
    getInteration(req: GetInterationRequest): Promise<GetInterationResponse>;
    /**
     * Update interation
     */
    updateInteration(req: UpdateInterationRequest): Promise<UpdateInterationResponse>;
    /**
     * Delete interation
     */
    deleteInteration(req: DeleteInterationRequest): Promise<DeleteInterationResponse>;
    /**
     * List all projects
     */
    listProjects(req: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * Create a project
     */
    createProject(req: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * Find project by id
     */
    getProject(req: GetProjectRequest): Promise<GetProjectResponse>;
    /**
     * Update project
     */
    updateProject(req: UpdateProjectRequest): Promise<UpdateProjectResponse>;
    /**
     * Delete project
     */
    deleteProject(req: DeleteProjectRequest): Promise<DeleteProjectResponse>;
  }
  export interface SummaryAPI {
    /**
     * Get tickets summary
     */
    getTicketsSummary(req: GetTicketsSummaryRequest): Promise<GetTicketsSummaryResponse>;
  }
  export interface StaffAPI {
    /**
     * List staffs
     */
    listStaffs(req: ListStaffsRequest): Promise<ListStaffsResponse>;
    /**
     * Upsert a staff
     */
    upsertStaff(req: UpsertStaffRequest): Promise<UpsertStaffResponse>;
    /**
     * update a staff
     */
    updateStaff(req: UpdateStaffRequest): Promise<UpdateStaffResponse>;
    /**
     * Find staff by id
     */
    getStaff(req: GetStaffRequest): Promise<GetStaffResponse>;
    /**
     * Delete staff
     */
    deleteStaff(req: DeleteStaffRequest): Promise<DeleteStaffResponse>;
  }

  type ListRepositoriesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        id?: string;
      };
    };
  };

  type ListRepositoriesResponse = {
    body: [Repository];
    headers: {
      xTotalCount: number;
    };
  };

  type GetRepositoryRequest = {
    driverId: string;
    repositoryId: string;
  };

  type GetRepositoryResponse = {
    body: Repository;
  };

  type ListIssuesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        id?: string;
        repository?: string;
        state?: "OPEN" | "CLOSED";
      };
    };
  };

  type ListIssuesResponse = {
    body: [Issue];
    headers: {
      xTotalCount: number;
    };
  };

  type GetIssueRequest = {
    driverId: string;
    issueId: string;
  };

  type GetIssueResponse = {
    body: Issue;
  };

  type CreateTicketRequest = {
    body: TicketDoc;
  };

  type CreateTicketResponse = {
    body: Ticket;
  };

  type ListTicketsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;
      group?: string;

      filter: {
        id?: string;
        repository?: string;
        driver?: string;
        interation?: string;
        project?: string;
        state?: "PLANNING" | "TODO" | "DOING" | "DONE";
        priority?: 0 | 1 | 2;
        deadline: {
          $gt?: string;
          $lt?: string;
        };
        takenAt: {
          $gt?: string;
          $lt?: string;
        };
        title: {
          $regex?: string;
        };
        takenBy?: string;
      };
    };
  };

  type ListTicketsResponse = {
    body: [Ticket];
    headers: {
      xTotalCount: number;
    };
  };

  type GetTicketRequest = {
    ticketId: string;
  };

  type GetTicketResponse = {
    body: Ticket;
  };

  type DeleteTicketRequest = {
    ticketId: string;
  };

  type CreateTicketEventRequest = {
    ticketId: string;
    body: TicketEvent;
  };

  type CreateTicketEventResponse = {
    body: Ticket;
  };

  type ListInterationsRequest = {
    projectId: string;

    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        planStart: {
          $gt?: string;
          $lt?: string;
        };
        planEnd: {
          $gt?: string;
          $lt?: string;
        };
        id?: string;
      };
    };
  };

  type ListInterationsResponse = {
    body: [Interation];
    headers: {
      xTotalCount: number;
    };
  };

  type CreateInteractionRequest = {
    projectId: string;
    body: InterationDoc;
  };

  type CreateInteractionResponse = {
    body: Interation;
  };

  type GetInterationRequest = {
    projectId: string;
    interationId: string;
  };

  type GetInterationResponse = {
    body: Interation;
  };

  type UpdateInterationRequest = {
    projectId: string;
    interationId: string;
    body: InterationDoc;
  };

  type UpdateInterationResponse = {
    body: Interation;
  };

  type DeleteInterationRequest = {
    projectId: string;
    interationId: string;
  };

  type ListProjectsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        name?: string;
        po?: string;
        cm?: string;
        state?: "DOING" | "ARCHIVED";
        planStart: {
          $gt?: string;
          $lt?: string;
        };
        planEnd: {
          $gt?: string;
          $lt?: string;
        };
        id?: string;
      };
    };
  };

  type ListProjectsResponse = {
    body: [Project];
    headers: {
      xTotalCount: number;
    };
  };

  type CreateProjectRequest = {
    body: ProjectDoc;
  };

  type CreateProjectResponse = {
    body: Project;
  };

  type GetProjectRequest = {
    projectId: string;
  };

  type GetProjectResponse = {
    body: Project;
  };

  type UpdateProjectRequest = {
    projectId: string;
    body: ProjectDoc;
  };

  type UpdateProjectResponse = {
    body: Project;
  };

  type DeleteProjectRequest = {
    projectId: string;
  };

  type GetTicketsSummaryRequest = {
    query: {
      group: [string];

      filter: {
        state?: "PLANNING" | "TODO" | "DOING" | "DONE";
        takenBy?: string;
        project?: string;
        interation?: string;
      };
    };
  };

  type GetTicketsSummaryResponse = {
    body: [TicketsSummary];
  };

  type ListStaffsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        name?: string;
        type?: string;
        position?: string;
      };
    };
  };

  type ListStaffsResponse = {
    body: [Staff];
    headers: {
      xTotalCount: number;
    };
  };

  type UpsertStaffRequest = {
    body: StaffDoc;
  };

  type UpsertStaffResponse = {
    body: Staff;
  };

  type UpdateStaffRequest = {
    staffId: string;
    body: StaffDoc;
  };

  type UpdateStaffResponse = {
    body: Staff;
  };

  type GetStaffRequest = {
    staffId: string;
  };

  type GetStaffResponse = {
    body: Staff;
  };

  type DeleteStaffRequest = {
    staffId: string;
  };

  type ProjectDoc = {
    name: string;
    description: string;
    po: [string];
    cm: [string];
    repositories: [string];
    planStartAt: string;
    planEndAt: string;
    state: "DOING" | "ARCHIVED";
    logo: string;
  };
  type Project = {
    id: string;
    updatedAt: string;
    createdAt: string;
    name: string;
    description: string;
    po: [string];
    cm: [string];
    repositories: [string];
    planStartAt: string;
    planEndAt: string;
    state: "DOING" | "ARCHIVED";
    logo: string;
  };
  type InterationDoc = {
    name: string;
    planStartAt: string;
    planEndAt: string;
    project: string;
  };
  type Interation = {
    id: string;
    updatedAt: string;
    createdAt: string;
    name: string;
    planStartAt: string;
    planEndAt: string;
    project: string;
  };
  type TicketsSummary = {};
  type DriverUser = {
    id: string;
    username: string;
    avatarUrl: string;
    url: string;
    htmlUrl: string;
    type: "User" | "Organization";
  };
  type Repository = {
    id: string;
    name: string;
    fullName: string;
    gitUrl: string;
    htmlUrl: string;
    owner: {
      id: string;
      username: string;
      avatarUrl: string;
      url: string;
      htmlUrl: string;
      type: "User" | "Organization";
    };
    private: boolean;
    pushedAt: string;
    readme: string;
    topics: [string];
    driver: "GITHUB" | "GITLAB";
  };
  type Issue = {
    id: string;
    title: string;
    repository: string;
    interation: string;
    number: number;
    labels: [string];
    state: "OPEN" | "CLOSED";
    closeAt: string;
    htmlUrl: string;
    user: {
      id: string;
      username: string;
      avatarUrl: string;
      url: string;
      htmlUrl: string;
      type: "User" | "Organization";
    };
    assignees: [
      {
        id: string;
        username: string;
        avatarUrl: string;
        url: string;
        htmlUrl: string;
        type: "User" | "Organization";
      }
    ];
    driver: "GITHUB" | "GITLAB";
  };
  type TicketDoc = {
    issue: string;
    title: string;
    repository: string;
    driver: string;
    level: number;
    state: "PLANNING" | "TODO" | "DOING" | "DONE";
    priority: 0 | 1 | 2;
    deadline: string;
    interation: string;
    project: string;
    takenBy: string;
    takenAt: string;
    doneAt: string;
    publishedAt: string;
    remark: string;
    bounds: number;
    labels: [
      {
        name: string;
        color: string;
      }
    ];
    events: [
      {
        name:
          | "PUBLISH"
          | "UNPUBLISH"
          | "ASSIGN"
          | "UNASSIGN"
          | "LEVEL"
          | "PRIORITY"
          | "BOUNDS"
          | "DEADLINE"
          | "DONE"
          | "REOPEN"
          | "LABEL";
        user: string;
        level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createdAt: string;
        priority: 0 | 1 | 2;
        deadline: string;
        interation: string;
        bounds: number;
        takenBy: string;
        foreignTakenBy: string;
        labels: [
          {
            name: string;
            color: string;
          }
        ];
      }
    ];
  };
  type TicketLabel = {
    name: string;
    color: string;
  };
  type TicketEvent = {
    name:
      | "PUBLISH"
      | "UNPUBLISH"
      | "ASSIGN"
      | "UNASSIGN"
      | "LEVEL"
      | "PRIORITY"
      | "BOUNDS"
      | "DEADLINE"
      | "DONE"
      | "REOPEN"
      | "LABEL";
    user: string;
    level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createdAt: string;
    priority: 0 | 1 | 2;
    deadline: string;
    interation: string;
    bounds: number;
    takenBy: string;
    foreignTakenBy: string;
    labels: [
      {
        name: string;
        color: string;
      }
    ];
  };
  type Ticket = {
    id: string;
    updatedAt: string;
    createdAt: string;
    issue: string;
    title: string;
    repository: string;
    driver: string;
    level: number;
    state: "PLANNING" | "TODO" | "DOING" | "DONE";
    priority: 0 | 1 | 2;
    deadline: string;
    interation: string;
    project: string;
    takenBy: string;
    takenAt: string;
    doneAt: string;
    publishedAt: string;
    remark: string;
    bounds: number;
    labels: [
      {
        name: string;
        color: string;
      }
    ];
    events: [
      {
        name:
          | "PUBLISH"
          | "UNPUBLISH"
          | "ASSIGN"
          | "UNASSIGN"
          | "LEVEL"
          | "PRIORITY"
          | "BOUNDS"
          | "DEADLINE"
          | "DONE"
          | "REOPEN"
          | "LABEL";
        user: string;
        level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createdAt: string;
        priority: 0 | 1 | 2;
        deadline: string;
        interation: string;
        bounds: number;
        takenBy: string;
        foreignTakenBy: string;
        labels: [
          {
            name: string;
            color: string;
          }
        ];
      }
    ];
  };
  type StaffDoc = {
    id: string;
    number: number;
    name: string;
    type: "36NODE" | "ADVENTURE";
    position: "PM" | "DEVELOPER" | "DESIGNER";
    level: number;
    base: number;
    bankCard: string;
    idNumber: string;
    city: string;
    weixin: string;
    phone: string;
    email: string;
    companyEmail: string;
    google: string;
    icloud: string;
    avatar: string;
  };
  type Staff = {
    id: string;
    updatedAt: string;
    createdAt: string;
    number: number;
    name: string;
    type: "36NODE" | "ADVENTURE";
    position: "PM" | "DEVELOPER" | "DESIGNER";
    level: number;
    base: number;
    bankCard: string;
    idNumber: string;
    city: string;
    weixin: string;
    phone: string;
    email: string;
    companyEmail: string;
    google: string;
    icloud: string;
    avatar: string;
  };
  type StaffWalletDoc = {
    balance: string;
    staff: string;
  };
  type StaffWallet = {
    id: string;
    updatedAt: string;
    createdAt: string;
    balance: string;
    staff: string;
  };
  type ProjectWalletDoc = {
    project: string;
    total: number;
    balance: string;
  };
  type ProjectWallet = {
    id: string;
    updatedAt: string;
    createdAt: string;
    project: string;
    total: number;
    balance: string;
  };
  type ProjectTradingRecordDoc = {
    project: string;
    wallet: string;
    type: "SHARED_EXP" | "TICKET_EXP";
    amount: number;
    balance: string;
    handler: string;
    ticketExp: {
      ticket: string;
      staff: string;
    };
    sharedExp: [
      {
        staff: string;
        position: "CM" | "PO";
        percent: number;
      }
    ];
  };
  type ProjectTradingRecord = {
    id: string;
    updatedAt: string;
    createdAt: string;
    project: string;
    wallet: string;
    type: "SHARED_EXP" | "TICKET_EXP";
    amount: number;
    balance: string;
    handler: string;
    ticketExp: {
      ticket: string;
      staff: string;
    };
    sharedExp: [
      {
        staff: string;
        position: "CM" | "PO";
        percent: number;
      }
    ];
  };
  type StaffTradingRecordDoc = {
    tradeNo: string;
    type: "TICKET_IN" | "PROJECT_SHARED_IN" | "SETTLE_EXP";
    amount: number;
    project: string;
    ticket: string;
    handler: string;
    balance: string;
    wallet: string;
  };
  type StaffTradingRecord = {
    id: string;
    updatedAt: string;
    createdAt: string;
    tradeNo: string;
    type: "TICKET_IN" | "PROJECT_SHARED_IN" | "SETTLE_EXP";
    amount: number;
    project: string;
    ticket: string;
    handler: string;
    balance: string;
    wallet: string;
  };
  type MongoDefault = {
    id: string;
    updatedAt: string;
    createdAt: string;
  };
  type Err = {
    code: string;
    message: string;
  };
}
