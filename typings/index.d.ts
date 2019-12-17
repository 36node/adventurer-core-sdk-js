export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  repository: SDK.RepositoryAPI;
  issue: SDK.IssueAPI;
  label: SDK.LabelAPI;
  ticket: SDK.TicketAPI;
  project: SDK.ProjectAPI;
  summary: SDK.SummaryAPI;
  staff: SDK.StaffAPI;
  wallet: SDK.WalletAPI;
  trade: SDK.TradeAPI;
  invitation: SDK.InvitationAPI;
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
    /**
     * Update repository by id
     */
    updateRepository(req: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse>;
    /**
     * Create a release
     */
    createRelease(req: CreateReleaseRequest): Promise<CreateReleaseResponse>;
    /**
     * add repository collaborator
     */
    addCollaborator(req: AddCollaboratorRequest): Promise<AddCollaboratorResponse>;
    /**
     * Delete collaborator
     */
    deleteCollaborator(req: DeleteCollaboratorRequest): Promise<DeleteCollaboratorResponse>;
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
    /**
     * Find issue comments by issue&#x27;s id and driver
     */
    getComments(req: GetCommentsRequest): Promise<GetCommentsResponse>;
  }
  export interface LabelAPI {
    /**
     * List all all labels
     */
    listLabels(req: ListLabelsRequest): Promise<ListLabelsResponse>;
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
    /**
     * Create a project document
     */
    createProjectDoc(req: CreateProjectDocRequest): Promise<CreateProjectDocResponse>;
    /**
     * Update a project document
     */
    updateProjectDoc(req: UpdateProjectDocRequest): Promise<UpdateProjectDocResponse>;
    /**
     * Create a project event
     */
    createProjectEvent(req: CreateProjectEventRequest): Promise<CreateProjectEventResponse>;
  }
  export interface SummaryAPI {
    /**
     * Get interations summary
     */
    getInteractionsSummary(
      req: GetInteractionsSummaryRequest
    ): Promise<GetInteractionsSummaryResponse>;
    /**
     * Get tickets summary
     */
    getTicketsSummary(req: GetTicketsSummaryRequest): Promise<GetTicketsSummaryResponse>;
    /**
     * Get trades summary
     */
    getTradeSummary(req: GetTradeSummaryRequest): Promise<GetTradeSummaryResponse>;
  }
  export interface StaffAPI {
    /**
     * List staffs
     */
    listStaffs(req: ListStaffsRequest): Promise<ListStaffsResponse>;
    /**
     * Create a staff
     */
    createStaff(req: CreateStaffRequest): Promise<CreateStaffResponse>;
    /**
     * upsert staff(only for development)
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
  export interface WalletAPI {
    /**
     * Find staff wallet by id
     */
    getStaffWallet(req: GetStaffWalletRequest): Promise<GetStaffWalletResponse>;
    /**
     * List wallets
     */
    listWallets(req: ListWalletsRequest): Promise<ListWalletsResponse>;
  }
  export interface TradeAPI {
    /**
     * List trades
     */
    listTrades(req: ListTradesRequest): Promise<ListTradesResponse>;
    /**
     * Create a trade
     */
    createTrade(req: CreateTradeRequest): Promise<CreateTradeResponse>;
  }
  export interface InvitationAPI {
    /**
     * Create a invitation, 用于发送邀请码
     */
    createInvitation(req: CreateInvitationRequest): Promise<CreateInvitationResponse>;
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
    repositoryId: string;
  };

  type GetRepositoryResponse = {
    body: Repository;
  };

  type UpdateRepositoryRequest = {
    repositoryId: string;
    body: Repository;
  };

  type UpdateRepositoryResponse = {
    body: Repository;
  };

  type CreateReleaseRequest = {
    body: Release;
  };

  type CreateReleaseResponse = {
    body: Release;
  };

  type AddCollaboratorRequest = {
    repositoryId: string;
    github: string;
  };

  type AddCollaboratorResponse = {
    body: Repository;
  };

  type DeleteCollaboratorRequest = {
    repositoryId: string;
    github: string;
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
    issueId: string;
  };

  type GetIssueResponse = {
    body: Issue;
  };

  type GetCommentsRequest = {
    issueId: string;
  };

  type GetCommentsResponse = {
    body: [IssueComment];
  };

  type ListLabelsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        id?: string;
        name?: string;
      };
    };
  };

  type ListLabelsResponse = {
    body: [Label];
    headers: {
      xTotalCount: number;
    };
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

  type CreateProjectDocRequest = {
    projectId: string;
    body: ProjectDocument;
  };

  type CreateProjectDocResponse = {
    body: ProjectDocument;
  };

  type UpdateProjectDocRequest = {
    projectId: string;
    docId: string;
    body: ProjectDocument;
  };

  type UpdateProjectDocResponse = {
    body: Project;
  };

  type CreateProjectEventRequest = {
    projectId: string;
    body: ProjectEvent;
  };

  type CreateProjectEventResponse = {
    body: Project;
  };

  type GetInteractionsSummaryRequest = {
    query: {
      group: [string];

      filter: {
        project?: string;
        planStart: {
          $gt?: string;
          $lt?: string;
        };
        planEnd: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type GetInteractionsSummaryResponse = {
    body: [InterationSummary];
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

  type GetTradeSummaryRequest = {
    query: {
      group: [string];

      filter: {
        project?: string;
        staff?: string;
      };
    };
  };

  type GetTradeSummaryResponse = {
    body: [TradeSummary];
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

  type CreateStaffRequest = {
    body: CreateStaffDoc;
  };

  type CreateStaffResponse = {
    body: Staff;
  };

  type UpsertStaffRequest = {
    body: CreateStaffDoc;
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

  type GetStaffWalletRequest = {
    staffId: string;
  };

  type GetStaffWalletResponse = {
    body: Wallet;
  };

  type ListWalletsRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        staff?: string;
      };
    };
  };

  type ListWalletsResponse = {
    body: [Wallet];
    headers: {
      xTotalCount: number;
    };
  };

  type ListTradesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        staff?: string;
        type?: string;
        staffName?: string;
        staffGithub?: string;
        createdAt: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListTradesResponse = {
    body: [Trade];
    headers: {
      xTotalCount: number;
    };
  };

  type CreateTradeRequest = {
    body: TradeDoc;
  };

  type CreateTradeResponse = {
    body: Trade;
  };

  type CreateInvitationRequest = {
    body: InvitationDoc;
  };

  type CreateInvitationResponse = {
    body: Invitation;
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
  type ProjectEvent = {
    name: "CHANGE_TOTAL" | "SHARED";
    total: number;
    shared: {
      total: number;
      remark: string;
      detail: [
        {
          staff: string;
          position: "PO" | "CM";
          percent: number;
        }
      ];
    };
  };
  type InterationDoc = {
    name: string;
    planStartAt: string;
    planEndAt: string;
    project: string;
  };
  type ProjectDocumentDoc = {
    title: string;
    content: string;
    updatedBy: string;
    createdBy: string;
  };
  type ProjectDocument = {
    id: string;
    updatedAt: string;
    createdAt: string;
    title: string;
    content: string;
    updatedBy: string;
    createdBy: string;
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
  type InterationSummary = {};
  type Repository = {
    id: string;
    name: string;
    fullName: string;
    gitUrl: string;
    htmlUrl: string;
    owner: string;
    private: boolean;
    pushedAt: string;
    createdAt: string;
    updatedAt: string;
    readme: string;
    topics: [string];
    collaborators: [string];
  };
  type Issue = {
    id: string;
    title: string;
    repository: string;
    number: number;
    labels: [string];
    state: "OPEN" | "CLOSED";
    closeAt: string;
    htmlUrl: string;
    user: string;
    assignees: [string];
    createdAt: string;
    updatedAt: string;
  };
  type IssueComment = {
    body: string;
    user: string;
    updatedAt: string;
    htmlUrl: string;
    authorAssociation: string;
  };
  type TicketDoc = {
    issue: string;
    title: string;
    repository: string;
    level: number;
    state: "PLANNING" | "TODO" | "DOING" | "DONE";
    priority: 0 | 1 | 2;
    deadline: string;
    interation: string;
    project: string;
    takenBy: string;
    publishBy: string;
    takenAt: string;
    doneAt: string;
    publishedAt: string;
    remark: string;
    bounds: number;
    labels: [string];
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
          | "LABEL"
          | "REMARK"
          | "INTERATION";
        user: string;
        level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createdAt: string;
        priority: 0 | 1 | 2;
        deadline: string;
        interation: string;
        bounds: number;
        takenBy: string;
        publishBy: string;
        foreignTakenBy: string;
        labels: [string];
        remark: string;
      }
    ];
  };
  type Label = {
    id: string;
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
      | "LABEL"
      | "REMARK"
      | "INTERATION";
    user: string;
    level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    createdAt: string;
    priority: 0 | 1 | 2;
    deadline: string;
    interation: string;
    bounds: number;
    takenBy: string;
    publishBy: string;
    foreignTakenBy: string;
    labels: [string];
    remark: string;
  };
  type Ticket = {
    id: string;
    updatedAt: string;
    createdAt: string;
    issue: string;
    title: string;
    repository: string;
    level: number;
    state: "PLANNING" | "TODO" | "DOING" | "DONE";
    priority: 0 | 1 | 2;
    deadline: string;
    interation: string;
    project: string;
    takenBy: string;
    publishBy: string;
    takenAt: string;
    doneAt: string;
    publishedAt: string;
    remark: string;
    bounds: number;
    labels: [string];
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
          | "LABEL"
          | "REMARK"
          | "INTERATION";
        user: string;
        level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        createdAt: string;
        priority: 0 | 1 | 2;
        deadline: string;
        interation: string;
        bounds: number;
        takenBy: string;
        publishBy: string;
        foreignTakenBy: string;
        labels: [string];
        remark: string;
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
    bankCard: string;
    idNumber: string;
    city: string;
    weixin: string;
    phone: string;
    email: string;
    companyEmail: string;
    google: string;
    icloud: string;
    github: string;
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
    bankCard: string;
    idNumber: string;
    city: string;
    weixin: string;
    phone: string;
    email: string;
    companyEmail: string;
    google: string;
    icloud: string;
    github: string;
    avatar: string;
  };
  type CreateStaffDoc = {
    code: string;
    id: string;
    number: number;
    name: string;
    type: "36NODE" | "ADVENTURE";
    position: "PM" | "DEVELOPER" | "DESIGNER";
    level: number;
    bankCard: string;
    idNumber: string;
    city: string;
    weixin: string;
    phone: string;
    email: string;
    companyEmail: string;
    google: string;
    icloud: string;
    github: string;
    avatar: string;
  };
  type WalletDoc = {
    balance: number;
    staff: string;
  };
  type Wallet = {
    id: string;
    updatedAt: string;
    createdAt: string;
    balance: number;
    staff: string;
  };
  type TradeDoc = {
    project: string;
    staff: string;
    type: "SHARED" | "TICKET" | "SETTLE";
    amount: number;
    handler: string;
    staffName: string;
    staffGithub: string;
  };
  type Trade = {
    id: string;
    updatedAt: string;
    createdAt: string;
    project: string;
    staff: string;
    type: "SHARED" | "TICKET" | "SETTLE";
    amount: number;
    handler: string;
    staffName: string;
    staffGithub: string;
  };
  type TradeSummary = {
    project: string;
    staff: string;
    handler: string;
    totalExp: string;
  };
  type CreateInvitationBody = {
    expiredAt: string;
    email: string;
    remark: string;
  };
  type InvitationDoc = {
    code: string;
    email: string;
    sent: boolean;
    expiredAt: string;
    used: boolean;
    usedAt: string;
    remark: string;
  };
  type Invitation = {
    id: string;
    updatedAt: string;
    createdAt: string;
    code: string;
    email: string;
    sent: boolean;
    expiredAt: string;
    used: boolean;
    usedAt: string;
    remark: string;
  };
  type Release = {
    version: string;
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
