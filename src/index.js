import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * repository's methods
   */
  repository = {
    /**
     * List all all repositories
     *
     * @param {ListRepositoriesRequest} req listRepositories request
     * @returns {Promise<ListRepositoriesResponse>} A paged array of repositories
     */
    listRepositories: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/repositories`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find repository by id
     *
     * @param {GetRepositoryRequest} req getRepository request
     * @returns {Promise<GetRepositoryResponse>} Expected response to a valid request
     */
    getRepository: (req = {}) => {
      const { repositoryId, headers } = req;

      if (!repositoryId)
        throw new Error("repositoryId is required for getRepository");

      return fetch(`${this.base}/repositories/${repositoryId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update repository by id
     *
     * @param {UpdateRepositoryRequest} req updateRepository request
     * @returns {Promise<UpdateRepositoryResponse>} The repository
     */
    updateRepository: (req = {}) => {
      const { repositoryId, headers, body } = req;

      if (!repositoryId)
        throw new Error("repositoryId is required for updateRepository");
      if (!body) throw new Error("requetBody is required for updateRepository");

      return fetch(`${this.base}/repositories/${repositoryId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * issue's methods
   */
  issue = {
    /**
     * List all all issues
     *
     * @param {ListIssuesRequest} req listIssues request
     * @returns {Promise<ListIssuesResponse>} A paged array of issues
     */
    listIssues: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/issues`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find issue by id and driver
     *
     * @param {GetIssueRequest} req getIssue request
     * @returns {Promise<GetIssueResponse>} Expected response to a valid request
     */
    getIssue: (req = {}) => {
      const { issueId, headers } = req;

      if (!issueId) throw new Error("issueId is required for getIssue");

      return fetch(`${this.base}/issues/${issueId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find issue comments by issue&#x27;s id and driver
     *
     * @param {GetCommentsRequest} req getComments request
     * @returns {Promise<GetCommentsResponse>} Expected response to a valid request
     */
    getComments: (req = {}) => {
      const { issueId, headers } = req;

      if (!issueId) throw new Error("issueId is required for getComments");

      return fetch(`${this.base}/issues/${issueId}/comments`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * label's methods
   */
  label = {
    /**
     * List all all labels
     *
     * @param {ListLabelsRequest} req listLabels request
     * @returns {Promise<ListLabelsResponse>} A paged array of labels
     */
    listLabels: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/labels`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * ticket's methods
   */
  ticket = {
    /**
     * Create a ticket
     *
     * @param {CreateTicketRequest} req createTicket request
     * @returns {Promise<CreateTicketResponse>} The ticket created
     */
    createTicket: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createTicket");

      return fetch(`${this.base}/tickets`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all all tickets
     *
     * @param {ListTicketsRequest} req listTickets request
     * @returns {Promise<ListTicketsResponse>} A paged array of tickets
     */
    listTickets: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/tickets`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find ticket by id
     *
     * @param {GetTicketRequest} req getTicket request
     * @returns {Promise<GetTicketResponse>} Expected response to a valid request
     */
    getTicket: (req = {}) => {
      const { ticketId, headers } = req;

      if (!ticketId) throw new Error("ticketId is required for getTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Delete ticket
     *
     * @param {DeleteTicketRequest} req deleteTicket request
     * @returns {Promise<DeleteTicketResponse>} ticket deleted
     */
    deleteTicket: (req = {}) => {
      const { ticketId, headers } = req;

      if (!ticketId) throw new Error("ticketId is required for deleteTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create ticket event
     *
     * @param {CreateTicketEventRequest} req createTicketEvent request
     * @returns {Promise<CreateTicketEventResponse>} Expected response to a valid request
     */
    createTicketEvent: (req = {}) => {
      const { ticketId, headers, body } = req;

      if (!ticketId)
        throw new Error("ticketId is required for createTicketEvent");
      if (!body)
        throw new Error("requetBody is required for createTicketEvent");

      return fetch(`${this.base}/tickets/${ticketId}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * project's methods
   */
  project = {
    /**
     * List all interations of project
     *
     * @param {ListInterationsRequest} req listInterations request
     * @returns {Promise<ListInterationsResponse>} A paged array of interations
     */
    listInterations: (req = {}) => {
      const { projectId, query, headers } = req;

      if (!projectId)
        throw new Error("projectId is required for listInterations");

      return fetch(`${this.base}/projects/${projectId}/interations`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a interation
     *
     * @param {CreateInteractionRequest} req createInteraction request
     * @returns {Promise<CreateInteractionResponse>} The project created
     */
    createInteraction: (req = {}) => {
      const { projectId, headers, body } = req;

      if (!projectId)
        throw new Error("projectId is required for createInteraction");
      if (!body)
        throw new Error("requetBody is required for createInteraction");

      return fetch(`${this.base}/projects/${projectId}/interations`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find interation by id
     *
     * @param {GetInterationRequest} req getInteration request
     * @returns {Promise<GetInterationResponse>} Expected response to a valid request
     */
    getInteration: (req = {}) => {
      const { projectId, interationId, headers } = req;

      if (!projectId)
        throw new Error("projectId is required for getInteration");
      if (!interationId)
        throw new Error("interationId is required for getInteration");

      return fetch(
        `${this.base}/projects/${projectId}/interations/${interationId}`,
        {
          method: "GET",
          headers: { Authorization: this.auth, ...headers },
        }
      );
    },
    /**
     * Update interation
     *
     * @param {UpdateInterationRequest} req updateInteration request
     * @returns {Promise<UpdateInterationResponse>} The interation
     */
    updateInteration: (req = {}) => {
      const { projectId, interationId, headers, body } = req;

      if (!projectId)
        throw new Error("projectId is required for updateInteration");
      if (!interationId)
        throw new Error("interationId is required for updateInteration");
      if (!body) throw new Error("requetBody is required for updateInteration");

      return fetch(
        `${this.base}/projects/${projectId}/interations/${interationId}`,
        {
          method: "PATCH",
          body,
          headers: { Authorization: this.auth, ...headers },
        }
      );
    },
    /**
     * Delete interation
     *
     * @param {DeleteInterationRequest} req deleteInteration request
     * @returns {Promise<DeleteInterationResponse>} interation deleted
     */
    deleteInteration: (req = {}) => {
      const { projectId, interationId, headers } = req;

      if (!projectId)
        throw new Error("projectId is required for deleteInteration");
      if (!interationId)
        throw new Error("interationId is required for deleteInteration");

      return fetch(
        `${this.base}/projects/${projectId}/interations/${interationId}`,
        {
          method: "DELETE",
          headers: { Authorization: this.auth, ...headers },
        }
      );
    },
    /**
     * List all projects
     *
     * @param {ListProjectsRequest} req listProjects request
     * @returns {Promise<ListProjectsResponse>} A paged array of projects
     */
    listProjects: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/projects`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a project
     *
     * @param {CreateProjectRequest} req createProject request
     * @returns {Promise<CreateProjectResponse>} The project created
     */
    createProject: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createProject");

      return fetch(`${this.base}/projects`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find project by id
     *
     * @param {GetProjectRequest} req getProject request
     * @returns {Promise<GetProjectResponse>} Expected response to a valid request
     */
    getProject: (req = {}) => {
      const { projectId, headers } = req;

      if (!projectId) throw new Error("projectId is required for getProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update project
     *
     * @param {UpdateProjectRequest} req updateProject request
     * @returns {Promise<UpdateProjectResponse>} The project
     */
    updateProject: (req = {}) => {
      const { projectId, headers, body } = req;

      if (!projectId)
        throw new Error("projectId is required for updateProject");
      if (!body) throw new Error("requetBody is required for updateProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Delete project
     *
     * @param {DeleteProjectRequest} req deleteProject request
     * @returns {Promise<DeleteProjectResponse>} project deleted
     */
    deleteProject: (req = {}) => {
      const { projectId, headers } = req;

      if (!projectId)
        throw new Error("projectId is required for deleteProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a project document
     *
     * @param {CreateProjectDocRequest} req createProjectDoc request
     * @returns {Promise<CreateProjectDocResponse>} The project document created
     */
    createProjectDoc: (req = {}) => {
      const { projectId, headers, body } = req;

      if (!projectId)
        throw new Error("projectId is required for createProjectDoc");
      if (!body) throw new Error("requetBody is required for createProjectDoc");

      return fetch(`${this.base}/projects/${projectId}/docs`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update a project document
     *
     * @param {UpdateProjectDocRequest} req updateProjectDoc request
     * @returns {Promise<UpdateProjectDocResponse>} The interation
     */
    updateProjectDoc: (req = {}) => {
      const { projectId, docId, headers, body } = req;

      if (!projectId)
        throw new Error("projectId is required for updateProjectDoc");
      if (!docId) throw new Error("docId is required for updateProjectDoc");
      if (!body) throw new Error("requetBody is required for updateProjectDoc");

      return fetch(`${this.base}/projects/${projectId}/docs/${docId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a project event
     *
     * @param {CreateProjectEventRequest} req createProjectEvent request
     * @returns {Promise<CreateProjectEventResponse>} The project event created
     */
    createProjectEvent: (req = {}) => {
      const { projectId, headers, body } = req;

      if (!projectId)
        throw new Error("projectId is required for createProjectEvent");
      if (!body)
        throw new Error("requetBody is required for createProjectEvent");

      return fetch(`${this.base}/projects/${projectId}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * summary's methods
   */
  summary = {
    /**
     * Get interations summary
     *
     * @param {GetInteractionsSummaryRequest} req getInteractionsSummary request
     * @returns {Promise<GetInteractionsSummaryResponse>} A paged array of tickets summaries
     */
    getInteractionsSummary: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for summary");

      return fetch(`${this.base}/summary/interations`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get tickets summary
     *
     * @param {GetTicketsSummaryRequest} req getTicketsSummary request
     * @returns {Promise<GetTicketsSummaryResponse>} A paged array of tickets summaries
     */
    getTicketsSummary: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for summary");

      return fetch(`${this.base}/summary/tickets`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get trades summary
     *
     * @param {GetTradeSummaryRequest} req getTradeSummary request
     * @returns {Promise<GetTradeSummaryResponse>} A paged array of tickets summaries
     */
    getTradeSummary: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for summary");

      return fetch(`${this.base}/summary/trades`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * staff's methods
   */
  staff = {
    /**
     * List staffs
     *
     * @param {ListStaffsRequest} req listStaffs request
     * @returns {Promise<ListStaffsResponse>} A paged array of staffs
     */
    listStaffs: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/staffs`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a staff
     *
     * @param {CreateStaffRequest} req createStaff request
     * @returns {Promise<CreateStaffResponse>} The ticket created
     */
    createStaff: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createStaff");

      return fetch(`${this.base}/staffs`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * upsert staff(only for development)
     *
     * @param {UpsertStaffRequest} req upsertStaff request
     * @returns {Promise<UpsertStaffResponse>} The staff updated
     */
    upsertStaff: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for upsertStaff");

      return fetch(`${this.base}/staffs`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * update a staff
     *
     * @param {UpdateStaffRequest} req updateStaff request
     * @returns {Promise<UpdateStaffResponse>} The staff updated
     */
    updateStaff: (req = {}) => {
      const { staffId, headers, body } = req;

      if (!staffId) throw new Error("staffId is required for updateStaff");
      if (!body) throw new Error("requetBody is required for updateStaff");

      return fetch(`${this.base}/staffs/${staffId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find staff by id
     *
     * @param {GetStaffRequest} req getStaff request
     * @returns {Promise<GetStaffResponse>} Expected response to a valid request
     */
    getStaff: (req = {}) => {
      const { staffId, headers } = req;

      if (!staffId) throw new Error("staffId is required for getStaff");

      return fetch(`${this.base}/staffs/${staffId}`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Delete staff
     *
     * @param {DeleteStaffRequest} req deleteStaff request
     * @returns {Promise<DeleteStaffResponse>} staff deleted
     */
    deleteStaff: (req = {}) => {
      const { staffId, headers } = req;

      if (!staffId) throw new Error("staffId is required for deleteStaff");

      return fetch(`${this.base}/staffs/${staffId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * wallet's methods
   */
  wallet = {
    /**
     * Find staff wallet by id
     *
     * @param {GetStaffWalletRequest} req getStaffWallet request
     * @returns {Promise<GetStaffWalletResponse>} Expected response to a valid request
     */
    getStaffWallet: (req = {}) => {
      const { staffId, headers } = req;

      if (!staffId) throw new Error("staffId is required for getStaffWallet");

      return fetch(`${this.base}/staffs/${staffId}/wallet`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List wallets
     *
     * @param {ListWalletsRequest} req listWallets request
     * @returns {Promise<ListWalletsResponse>} A paged array of staffs
     */
    listWallets: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/wallets`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * trade's methods
   */
  trade = {
    /**
     * List trades
     *
     * @param {ListTradesRequest} req listTrades request
     * @returns {Promise<ListTradesResponse>} A paged array of trade
     */
    listTrades: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/trades`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a trade
     *
     * @param {CreateTradeRequest} req createTrade request
     * @returns {Promise<CreateTradeResponse>} The trade created
     */
    createTrade: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createTrade");

      return fetch(`${this.base}/trades`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
