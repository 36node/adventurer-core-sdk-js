//@ts-check
import fetch from "@36node/fetch";

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
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
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
    listRepositories: req => {
      const { query } = req || {};

      return fetch(`${this.base}/repositories`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find repository by id
     *
     * @param {GetRepositoryRequest} req getRepository request
     * @returns {Promise<GetRepositoryResponse>} Expected response to a valid request
     */
    getRepository: req => {
      const { repositoryId } = req || {};

      if (!repositoryId)
        throw new Error("repositoryId is required for getRepository");

      return fetch(`${this.base}/repositories/${repositoryId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update repository by id
     *
     * @param {UpdateRepositoryRequest} req updateRepository request
     * @returns {Promise<UpdateRepositoryResponse>} The repository
     */
    updateRepository: req => {
      const { repositoryId, body } = req || {};

      if (!repositoryId)
        throw new Error("repositoryId is required for updateRepository");
      if (!body) throw new Error("requetBody is required for updateRepository");

      return fetch(`${this.base}/repositories/${repositoryId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a release
     *
     * @param {CreateReleaseRequest} req createRelease request
     * @returns {Promise<CreateReleaseResponse>} The release created
     */
    createRelease: req => {
      const { repositoryId, body } = req || {};

      if (!repositoryId)
        throw new Error("repositoryId is required for createRelease");
      if (!body) throw new Error("requetBody is required for createRelease");

      return fetch(`${this.base}/repositories/${repositoryId}/release`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete all invitatings
     *
     * @param {DeleteInvitatingsRequest} req deleteInvitatings request
     * @returns {Promise<DeleteInvitatingsResponse>} collaborator deleted
     */
    deleteInvitatings: req => {
      const { repositoryId } = req || {};

      if (!repositoryId)
        throw new Error("repositoryId is required for deleteInvitatings");

      return fetch(`${this.base}/repositories/${repositoryId}/invitatings`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * add repository collaborator
     *
     * @param {AddCollaboratorRequest} req addCollaborator request
     * @returns {Promise<AddCollaboratorResponse>} invite collaborators success
     */
    addCollaborator: req => {
      const { repositoryId, github } = req || {};

      if (!repositoryId)
        throw new Error("repositoryId is required for addCollaborator");
      if (!github) throw new Error("github is required for addCollaborator");

      return fetch(
        `${this.base}/repositories/${repositoryId}/collaborator/${github}`,
        {
          method: "PUT",
          headers: { Authorization: this.auth },
        }
      );
    },
    /**
     * Delete collaborator
     *
     * @param {DeleteCollaboratorRequest} req deleteCollaborator request
     */
    deleteCollaborator: req => {
      const { repositoryId, github } = req || {};

      if (!repositoryId)
        throw new Error("repositoryId is required for deleteCollaborator");
      if (!github) throw new Error("github is required for deleteCollaborator");

      return fetch(
        `${this.base}/repositories/${repositoryId}/collaborator/${github}`,
        {
          method: "DELETE",
          headers: { Authorization: this.auth },
        }
      );
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
    listIssues: req => {
      const { query } = req || {};

      return fetch(`${this.base}/issues`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find issue by id and driver
     *
     * @param {GetIssueRequest} req getIssue request
     * @returns {Promise<GetIssueResponse>} Expected response to a valid request
     */
    getIssue: req => {
      const { issueId } = req || {};

      if (!issueId) throw new Error("issueId is required for getIssue");

      return fetch(`${this.base}/issues/${issueId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find issue comments by issue&#x27;s id and driver
     *
     * @param {GetCommentsRequest} req getComments request
     * @returns {Promise<GetCommentsResponse>} Expected response to a valid request
     */
    getComments: req => {
      const { issueId } = req || {};

      if (!issueId) throw new Error("issueId is required for getComments");

      return fetch(`${this.base}/issues/${issueId}/comments`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * pr's methods
   */
  pr = {
    /**
     * List all all prs
     *
     * @param {ListPrsRequest} req listPrs request
     * @returns {Promise<ListPrsResponse>} A paged array of prs
     */
    listPrs: req => {
      const { query } = req || {};

      return fetch(`${this.base}/prs`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
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
    listLabels: req => {
      const { query } = req || {};

      return fetch(`${this.base}/labels`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
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
    createTicket: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createTicket");

      return fetch(`${this.base}/tickets`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all all tickets
     *
     * @param {ListTicketsRequest} req listTickets request
     * @returns {Promise<ListTicketsResponse>} A paged array of tickets
     */
    listTickets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/tickets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find ticket by id
     *
     * @param {GetTicketRequest} req getTicket request
     * @returns {Promise<GetTicketResponse>} Expected response to a valid request
     */
    getTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for getTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete ticket
     *
     * @param {DeleteTicketRequest} req deleteTicket request
     */
    deleteTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for deleteTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create ticket event
     *
     * @param {CreateTicketEventRequest} req createTicketEvent request
     * @returns {Promise<CreateTicketEventResponse>} Expected response to a valid request
     */
    createTicketEvent: req => {
      const { ticketId, body } = req || {};

      if (!ticketId)
        throw new Error("ticketId is required for createTicketEvent");
      if (!body)
        throw new Error("requetBody is required for createTicketEvent");

      return fetch(`${this.base}/tickets/${ticketId}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
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
    listInterations: req => {
      const { projectId, query } = req || {};

      if (!projectId)
        throw new Error("projectId is required for listInterations");

      return fetch(`${this.base}/projects/${projectId}/interations`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a interation
     *
     * @param {CreateInteractionRequest} req createInteraction request
     * @returns {Promise<CreateInteractionResponse>} The project created
     */
    createInteraction: req => {
      const { projectId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for createInteraction");
      if (!body)
        throw new Error("requetBody is required for createInteraction");

      return fetch(`${this.base}/projects/${projectId}/interations`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find interation by id
     *
     * @param {GetInterationRequest} req getInteration request
     * @returns {Promise<GetInterationResponse>} Expected response to a valid request
     */
    getInteration: req => {
      const { projectId, interationId } = req || {};

      if (!projectId)
        throw new Error("projectId is required for getInteration");
      if (!interationId)
        throw new Error("interationId is required for getInteration");

      return fetch(
        `${this.base}/projects/${projectId}/interations/${interationId}`,
        {
          method: "GET",
          headers: { Authorization: this.auth },
        }
      );
    },
    /**
     * Update interation
     *
     * @param {UpdateInterationRequest} req updateInteration request
     * @returns {Promise<UpdateInterationResponse>} The interation
     */
    updateInteration: req => {
      const { projectId, interationId, body } = req || {};

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
          headers: { Authorization: this.auth },
        }
      );
    },
    /**
     * Delete interation
     *
     * @param {DeleteInterationRequest} req deleteInteration request
     */
    deleteInteration: req => {
      const { projectId, interationId } = req || {};

      if (!projectId)
        throw new Error("projectId is required for deleteInteration");
      if (!interationId)
        throw new Error("interationId is required for deleteInteration");

      return fetch(
        `${this.base}/projects/${projectId}/interations/${interationId}`,
        {
          method: "DELETE",
          headers: { Authorization: this.auth },
        }
      );
    },
    /**
     * List all projects
     *
     * @param {ListProjectsRequest} req listProjects request
     * @returns {Promise<ListProjectsResponse>} A paged array of projects
     */
    listProjects: req => {
      const { query } = req || {};

      return fetch(`${this.base}/projects`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a project
     *
     * @param {CreateProjectRequest} req createProject request
     * @returns {Promise<CreateProjectResponse>} The project created
     */
    createProject: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createProject");

      return fetch(`${this.base}/projects`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find project by id
     *
     * @param {GetProjectRequest} req getProject request
     * @returns {Promise<GetProjectResponse>} Expected response to a valid request
     */
    getProject: req => {
      const { projectId } = req || {};

      if (!projectId) throw new Error("projectId is required for getProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update project
     *
     * @param {UpdateProjectRequest} req updateProject request
     * @returns {Promise<UpdateProjectResponse>} The project
     */
    updateProject: req => {
      const { projectId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for updateProject");
      if (!body) throw new Error("requetBody is required for updateProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete project
     *
     * @param {DeleteProjectRequest} req deleteProject request
     */
    deleteProject: req => {
      const { projectId } = req || {};

      if (!projectId)
        throw new Error("projectId is required for deleteProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a project document
     *
     * @param {CreateProjectDocRequest} req createProjectDoc request
     * @returns {Promise<CreateProjectDocResponse>} The project document created
     */
    createProjectDoc: req => {
      const { projectId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for createProjectDoc");
      if (!body) throw new Error("requetBody is required for createProjectDoc");

      return fetch(`${this.base}/projects/${projectId}/docs`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * get a project summary
     *
     * @param {GetProjectSummaryRequest} req getProjectSummary request
     * @returns {Promise<GetProjectSummaryResponse>} Expected response to a valid request
     */
    getProjectSummary: req => {
      const { projectId } = req || {};

      if (!projectId)
        throw new Error("projectId is required for getProjectSummary");

      return fetch(`${this.base}/projects/${projectId}/summary`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update a project document
     *
     * @param {UpdateProjectDocRequest} req updateProjectDoc request
     * @returns {Promise<UpdateProjectDocResponse>} The interation
     */
    updateProjectDoc: req => {
      const { projectId, docId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for updateProjectDoc");
      if (!docId) throw new Error("docId is required for updateProjectDoc");
      if (!body) throw new Error("requetBody is required for updateProjectDoc");

      return fetch(`${this.base}/projects/${projectId}/docs/${docId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a project event
     *
     * @param {CreateProjectEventRequest} req createProjectEvent request
     * @returns {Promise<CreateProjectEventResponse>} The project event created
     */
    createProjectEvent: req => {
      const { projectId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for createProjectEvent");
      if (!body)
        throw new Error("requetBody is required for createProjectEvent");

      return fetch(`${this.base}/projects/${projectId}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
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
    getInteractionsSummary: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for summary");

      return fetch(`${this.base}/summary/interations`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get tickets summary
     *
     * @param {GetTicketsSummaryRequest} req getTicketsSummary request
     * @returns {Promise<GetTicketsSummaryResponse>} A paged array of tickets summaries
     */
    getTicketsSummary: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for summary");

      return fetch(`${this.base}/summary/tickets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get trades summary
     *
     * @param {GetTradeSummaryRequest} req getTradeSummary request
     * @returns {Promise<GetTradeSummaryResponse>} A paged array of tickets summaries
     */
    getTradeSummary: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for summary");

      return fetch(`${this.base}/summary/trades`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get trades summary by month
     *
     * @param {GetTradeSummaryByMonthRequest} req getTradeSummaryByMonth request
     * @returns {Promise<GetTradeSummaryByMonthResponse>} A paged array of tickets summaries
     */
    getTradeSummaryByMonth: req => {
      const { query } = req || {};

      return fetch(`${this.base}/summary/tradesByMonth`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get ticket done summary
     *
     * @param {GetTicketDoneSummaryRequest} req getTicketDoneSummary request
     * @returns {Promise<GetTicketDoneSummaryResponse>} A paged array of tickets done summaries
     */
    getTicketDoneSummary: req => {
      const { query } = req || {};

      return fetch(`${this.base}/summary/ticketDone`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get ticket coverage summary
     *
     * @param {GetTicketCoverageSummaryRequest} req getTicketCoverageSummary request
     * @returns {Promise<GetTicketCoverageSummaryResponse>} A paged array of tickets coverage summaries
     */
    getTicketCoverageSummary: req => {
      const { query } = req || {};

      return fetch(`${this.base}/summary/ticketCoverage`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
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
    listStaffs: req => {
      const { query } = req || {};

      return fetch(`${this.base}/staffs`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a staff
     *
     * @param {CreateStaffRequest} req createStaff request
     * @returns {Promise<CreateStaffResponse>} The ticket created
     */
    createStaff: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createStaff");

      return fetch(`${this.base}/staffs`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * upsert staff(only for development)
     *
     * @param {UpsertStaffRequest} req upsertStaff request
     * @returns {Promise<UpsertStaffResponse>} The staff updated
     */
    upsertStaff: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for upsertStaff");

      return fetch(`${this.base}/staffs`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update a staff
     *
     * @param {UpdateStaffRequest} req updateStaff request
     * @returns {Promise<UpdateStaffResponse>} The staff updated
     */
    updateStaff: req => {
      const { staffId, body } = req || {};

      if (!staffId) throw new Error("staffId is required for updateStaff");
      if (!body) throw new Error("requetBody is required for updateStaff");

      return fetch(`${this.base}/staffs/${staffId}`, {
        method: "PATCH",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find staff by id
     *
     * @param {GetStaffRequest} req getStaff request
     * @returns {Promise<GetStaffResponse>} Expected response to a valid request
     */
    getStaff: req => {
      const { staffId } = req || {};

      if (!staffId) throw new Error("staffId is required for getStaff");

      return fetch(`${this.base}/staffs/${staffId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete staff
     *
     * @param {DeleteStaffRequest} req deleteStaff request
     */
    deleteStaff: req => {
      const { staffId } = req || {};

      if (!staffId) throw new Error("staffId is required for deleteStaff");

      return fetch(`${this.base}/staffs/${staffId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
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
    getStaffWallet: req => {
      const { staffId } = req || {};

      if (!staffId) throw new Error("staffId is required for getStaffWallet");

      return fetch(`${this.base}/staffs/${staffId}/wallet`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List wallets
     *
     * @param {ListWalletsRequest} req listWallets request
     * @returns {Promise<ListWalletsResponse>} A paged array of staffs
     */
    listWallets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/wallets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
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
    listTrades: req => {
      const { query } = req || {};

      return fetch(`${this.base}/trades`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a trade
     *
     * @param {CreateTradeRequest} req createTrade request
     * @returns {Promise<CreateTradeResponse>} The trade created
     */
    createTrade: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createTrade");

      return fetch(`${this.base}/trades`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * invitation's methods
   */
  invitation = {
    /**
     * Create a invitation, 用于发送邀请码
     *
     * @param {CreateInvitationRequest} req createInvitation request
     * @returns {Promise<CreateInvitationResponse>} The invitation created
     */
    createInvitation: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createInvitation");

      return fetch(`${this.base}/invitations`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
}
