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

  type ListRepositoriesRequest = {
    query: {
      limit?: number;
      offset?: number;
      sort?: string;
      select?: string;

      filter: {
        id?: string;
        driver: string;
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
        interation?: string;
        driver: string;
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

  type ProjectDoc = {
    name: string;
    description: string;
    po: string;
    cm: string;
    repositories: [string];
    planStartAt: string;
    planEndAt: string;
    state: "DOING" | "ARCHIVED";
  };
  type TicketStats = {
    planningCount: number;
    todoCount: number;
    doingCount: number;
    doneCount: number;
  };
  type Project = {
    id: string;
    updatedAt: string;
    createdAt: string;
    name: string;
    description: string;
    po: string;
    cm: string;
    repositories: [string];
    planStartAt: string;
    planEndAt: string;
    state: "DOING" | "ARCHIVED";
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
  type Repository = {
    name: string;
    fullName: string;
    gitUrl: string;
    htmlUrl: string;
    owner: string;
    private: boolean;
    pushedAt: string;
    readme: string;
    topics: [string];
    driver: "GITHUB" | "GITLAB";
    refId: string;
  };
  type Issue = {
    title: string;
    repository: string;
    interation: string;
    number: number;
    labels: [string];
    state: "OPEN" | "CLOSE";
    createBy: string;
    closeAt: string;
    closeBy: string;
    driver: "GITHUB" | "GITLAB";
    refId: string;
  };
  type TicketDoc = {
    issue: string;
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
        name: "TAKE" | "BACKOUT" | "LEVEL" | "PRIORITY" | "BOUNDS" | "DEADLINE" | "DONE" | "LABEL";
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
    name: "TAKE" | "BACKOUT" | "LEVEL" | "PRIORITY" | "BOUNDS" | "DEADLINE" | "DONE" | "LABEL";
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
        name: "TAKE" | "BACKOUT" | "LEVEL" | "PRIORITY" | "BOUNDS" | "DEADLINE" | "DONE" | "LABEL";
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
