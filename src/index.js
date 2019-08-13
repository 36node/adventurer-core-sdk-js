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

      if (!query) throw new Error("query is required for repository");

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
      const { driverId, repositoryId, headers } = req;

      if (!driverId) throw new Error("driverId is required for getRepository");
      if (!repositoryId)
        throw new Error("repositoryId is required for getRepository");

      return fetch(`${this.base}/repositories/${driverId}/${repositoryId}`, {
        method: "GET",
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

      if (!query) throw new Error("query is required for issue");

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
      const { driverId, issueId, headers } = req;

      if (!driverId) throw new Error("driverId is required for getIssue");
      if (!issueId) throw new Error("issueId is required for getIssue");

      return fetch(`${this.base}/issues/${driverId}/${issueId}`, {
        method: "GET",
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
  };
}
