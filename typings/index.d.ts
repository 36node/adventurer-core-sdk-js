declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  repository: RepositoryAPI;
  issue: IssueAPI;
  pr: PrAPI;
  label: LabelAPI;
  ticket: TicketAPI;
  project: ProjectAPI;
  summary: SummaryAPI;
  staff: StaffAPI;
  wallet: WalletAPI;
  trade: TradeAPI;
  invitation: InvitationAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
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
   * Delete all invitatings
   */
  deleteInvitatings(req: DeleteInvitatingsRequest): Promise<DeleteInvitatingsResponse>;
  /**
   * add repository collaborator
   */
  addCollaborator(req: AddCollaboratorRequest): Promise<AddCollaboratorResponse>;
  /**
   * Delete collaborator
   */
  deleteCollaborator(req: DeleteCollaboratorRequest): Promise<void>;
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
export interface PrAPI {
  /**
   * List all all prs
   */
  listPrs(req: ListPrsRequest): Promise<ListPrsResponse>;
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
  deleteTicket(req: DeleteTicketRequest): Promise<void>;
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
  deleteInteration(req: DeleteInterationRequest): Promise<void>;
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
  deleteProject(req: DeleteProjectRequest): Promise<void>;
  /**
   * Create a project document
   */
  createProjectDoc(req: CreateProjectDocRequest): Promise<CreateProjectDocResponse>;
  /**
   * get a project summary
   */
  getProjectSummary(req: GetProjectSummaryRequest): Promise<GetProjectSummaryResponse>;
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
  /**
   * Get trades summary by month
   */
  getTradeSummaryByMonth(
    req: GetTradeSummaryByMonthRequest
  ): Promise<GetTradeSummaryByMonthResponse>;
  /**
   * Get ticket done summary
   */
  getTicketDoneSummary(req: GetTicketDoneSummaryRequest): Promise<GetTicketDoneSummaryResponse>;
  /**
   * Get ticket coverage summary
   */
  getTicketCoverageSummary(
    req: GetTicketCoverageSummaryRequest
  ): Promise<GetTicketCoverageSummaryResponse>;
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
  deleteStaff(req: DeleteStaffRequest): Promise<void>;
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

export interface ListRepositoriesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    id?: string;
  };
}
export interface ListRepositoriesResponse {
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 仓库全称
     */
    fullName?: string;
    /**
     * url for clone
     */
    gitUrl?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    owner?: string;
    /**
     * 是否私有
     */
    private?: boolean;
    /**
     * 最近push时间
     */
    pushedAt?: string;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * readme 内容
     */
    readme?: string;
    /**
     * 主题
     */
    topics?: string[];
    collaborators?: string[];
    technologies?: string[];
    types?: string[];
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetRepositoryRequest {
  repositoryId: string;
}
export interface GetRepositoryResponse {
  /**
   * Repo Doc
   */
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 仓库全称
     */
    fullName?: string;
    /**
     * url for clone
     */
    gitUrl?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    owner?: string;
    /**
     * 是否私有
     */
    private?: boolean;
    /**
     * 最近push时间
     */
    pushedAt?: string;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * readme 内容
     */
    readme?: string;
    /**
     * 主题
     */
    topics?: string[];
    collaborators?: string[];
    technologies?: string[];
    types?: string[];
  };
}
export interface UpdateRepositoryRequest {
  repositoryId: string;
  /**
   * Repo Doc
   */
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 仓库全称
     */
    fullName?: string;
    /**
     * url for clone
     */
    gitUrl?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    owner?: string;
    /**
     * 是否私有
     */
    private?: boolean;
    /**
     * 最近push时间
     */
    pushedAt?: string;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * readme 内容
     */
    readme?: string;
    /**
     * 主题
     */
    topics?: string[];
    collaborators?: string[];
    technologies?: string[];
    types?: string[];
  };
}
export interface UpdateRepositoryResponse {
  /**
   * Repo Doc
   */
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 仓库全称
     */
    fullName?: string;
    /**
     * url for clone
     */
    gitUrl?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    owner?: string;
    /**
     * 是否私有
     */
    private?: boolean;
    /**
     * 最近push时间
     */
    pushedAt?: string;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * readme 内容
     */
    readme?: string;
    /**
     * 主题
     */
    topics?: string[];
    collaborators?: string[];
    technologies?: string[];
    types?: string[];
  };
}
export interface CreateReleaseRequest {
  repositoryId: string;
  /**
   * release of repository
   */
  body: {
    /**
     * 暂时不提供
     */
    version?: string;
  };
}
export interface CreateReleaseResponse {
  /**
   * release of repository
   */
  body: {
    /**
     * 暂时不提供
     */
    version?: string;
  };
}
export interface DeleteInvitatingsRequest {
  repositoryId: string;
}
export interface DeleteInvitatingsResponse {
  /**
   * Repo Doc
   */
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 仓库全称
     */
    fullName?: string;
    /**
     * url for clone
     */
    gitUrl?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    owner?: string;
    /**
     * 是否私有
     */
    private?: boolean;
    /**
     * 最近push时间
     */
    pushedAt?: string;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * readme 内容
     */
    readme?: string;
    /**
     * 主题
     */
    topics?: string[];
    collaborators?: string[];
    technologies?: string[];
    types?: string[];
  };
}
export interface AddCollaboratorRequest {
  repositoryId: string;
  github: string;
}
export interface AddCollaboratorResponse {
  /**
   * Repo Doc
   */
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 仓库名称
     */
    name?: string;
    /**
     * 仓库全称
     */
    fullName?: string;
    /**
     * url for clone
     */
    gitUrl?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    owner?: string;
    /**
     * 是否私有
     */
    private?: boolean;
    /**
     * 最近push时间
     */
    pushedAt?: string;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * readme 内容
     */
    readme?: string;
    /**
     * 主题
     */
    topics?: string[];
    collaborators?: string[];
    technologies?: string[];
    types?: string[];
  };
}
export interface DeleteCollaboratorRequest {
  repositoryId: string;
  github: string;
}
export interface ListIssuesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    id?: string;
    repository?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface ListIssuesResponse {
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 所属repo (repositoryId)
     */
    repository?: string;
    /**
     * issue 号
     */
    number?: number;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 创建者
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭时间
     */
    closeAt?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    user?: string;
    assignees?: string[];
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetIssueRequest {
  issueId: string;
}
export interface GetIssueResponse {
  /**
   * Issue Doc
   */
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 所属repo (repositoryId)
     */
    repository?: string;
    /**
     * issue 号
     */
    number?: number;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 创建者
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭时间
     */
    closeAt?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    user?: string;
    assignees?: string[];
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
  };
}
export interface GetCommentsRequest {
  issueId: string;
}
export interface GetCommentsResponse {
  body: {
    /**
     * content of comment
     */
    body?: string;
    /**
     * writer of comment
     */
    user?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * github url of comment
     */
    htmlUrl?: string;
    /**
     * role of user
     */
    authorAssociation?: string;
  }[];
}
export interface ListPrsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    id?: string;
    repository?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface ListPrsResponse {
  body: {
    /**
     * 在第三方服务中的id
     */
    id?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 所属repo (repositoryId)
     */
    repository?: string;
    /**
     * pr 号
     */
    number?: number;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * pr状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭时间
     */
    closeAt?: string;
    /**
     * url
     */
    htmlUrl?: string;
    /**
     * github user username
     */
    user?: string;
    assignees?: string[];
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListLabelsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    id?: string;
    name?: string;
  };
}
export interface ListLabelsResponse {
  body: {
    /**
     * label id
     */
    id?: string;
    /**
     * label name
     */
    name?: string;
    /**
     * label color
     */
    color?: string;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateTicketRequest {
  /**
   * Ticket Doc
   */
  body: {
    /**
     * 关联的issue (第三方服务中的issueid)
     */
    issue: string;
    /**
     * ticket titile
     */
    title?: string;
    /**
     * 所属repo (第三方服务中的 repositoryId)
     */
    repository?: string;
    /**
     * 级别
     */
    level?: number;
    /**
     * 状态
     */
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 所属项目 (projectId)
     */
    project?: string;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取时间
     */
    takenAt?: string;
    /**
     * 完成时间
     */
    doneAt?: string;
    /**
     * 发布时间
     */
    publishedAt?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    labels?: string[];
    events?: {
      name:
        | "PUBLISH"
        | "UNPUBLISH"
        | "ASSIGN"
        | "UNASSIGN"
        | "LEVEL"
        | "PRIORITY"
        | "BONUS"
        | "DEADLINE"
        | "DONE"
        | "REOPEN"
        | "LABEL"
        | "REMARK"
        | "INTERATION";
      /**
       * 操作人 (userId)
       */
      user: string;
      /**
       * 级别
       */
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 创建时间
       */
      createdAt?: string;
      /**
       * 优先级
       */
      priority?: 0 | 1 | 2;
      /**
       * 截止时间
       */
      deadline?: string;
      /**
       * 所属迭代 (interationId)
       */
      interation?: string;
      /**
       * 额外暴击奖励
       */
      bonus?: number;
      /**
       * 领取人 (userId)
       */
      takenBy?: string;
      /**
       * 发布人 (userId)
       */
      publishBy?: string;
      /**
       * 领取人 外部id
       */
      foreignTakenBy?: string;
      /**
       * ticket labels
       */
      labels?: string[];
      /**
       * ticket remark
       */
      remark?: string;
      relatedRepos?: string[];
    }[];
    /**
     * 是否 reopened 过
     */
    reopened?: boolean;
    reopenedAt?: string;
    relatedRepos?: string[];
  };
}
export interface CreateTicketResponse {
  body: {
    /**
     * 关联的issue (第三方服务中的issueid)
     */
    issue: string;
    /**
     * ticket titile
     */
    title?: string;
    /**
     * 所属repo (第三方服务中的 repositoryId)
     */
    repository?: string;
    /**
     * 级别
     */
    level?: number;
    /**
     * 状态
     */
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 所属项目 (projectId)
     */
    project?: string;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取时间
     */
    takenAt?: string;
    /**
     * 完成时间
     */
    doneAt?: string;
    /**
     * 发布时间
     */
    publishedAt?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    labels?: string[];
    events?: {
      name:
        | "PUBLISH"
        | "UNPUBLISH"
        | "ASSIGN"
        | "UNASSIGN"
        | "LEVEL"
        | "PRIORITY"
        | "BONUS"
        | "DEADLINE"
        | "DONE"
        | "REOPEN"
        | "LABEL"
        | "REMARK"
        | "INTERATION";
      /**
       * 操作人 (userId)
       */
      user: string;
      /**
       * 级别
       */
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 创建时间
       */
      createdAt?: string;
      /**
       * 优先级
       */
      priority?: 0 | 1 | 2;
      /**
       * 截止时间
       */
      deadline?: string;
      /**
       * 所属迭代 (interationId)
       */
      interation?: string;
      /**
       * 额外暴击奖励
       */
      bonus?: number;
      /**
       * 领取人 (userId)
       */
      takenBy?: string;
      /**
       * 发布人 (userId)
       */
      publishBy?: string;
      /**
       * 领取人 外部id
       */
      foreignTakenBy?: string;
      /**
       * ticket labels
       */
      labels?: string[];
      /**
       * ticket remark
       */
      remark?: string;
      relatedRepos?: string[];
    }[];
    /**
     * 是否 reopened 过
     */
    reopened?: boolean;
    reopenedAt?: string;
    relatedRepos?: string[];
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface ListTicketsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    _group?: string;
    id?: string;
    repository?: string;
    driver?: string;
    interation?: string;
    project?: string;
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    priority?: 0 | 1 | 2;
    deadline_gt?: string;
    deadline_lt?: string;
    takenAt_gt?: string;
    takenAt_lt?: string;
    title_like?: string;
    takenBy?: string;
  };
}
export interface ListTicketsResponse {
  body: ({
    /**
     * 关联的issue (第三方服务中的issueid)
     */
    issue: string;
    /**
     * ticket titile
     */
    title?: string;
    /**
     * 所属repo (第三方服务中的 repositoryId)
     */
    repository?: string;
    /**
     * 级别
     */
    level?: number;
    /**
     * 状态
     */
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 所属项目 (projectId)
     */
    project?: string;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取时间
     */
    takenAt?: string;
    /**
     * 完成时间
     */
    doneAt?: string;
    /**
     * 发布时间
     */
    publishedAt?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    labels?: string[];
    events?: {
      name:
        | "PUBLISH"
        | "UNPUBLISH"
        | "ASSIGN"
        | "UNASSIGN"
        | "LEVEL"
        | "PRIORITY"
        | "BONUS"
        | "DEADLINE"
        | "DONE"
        | "REOPEN"
        | "LABEL"
        | "REMARK"
        | "INTERATION";
      /**
       * 操作人 (userId)
       */
      user: string;
      /**
       * 级别
       */
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 创建时间
       */
      createdAt?: string;
      /**
       * 优先级
       */
      priority?: 0 | 1 | 2;
      /**
       * 截止时间
       */
      deadline?: string;
      /**
       * 所属迭代 (interationId)
       */
      interation?: string;
      /**
       * 额外暴击奖励
       */
      bonus?: number;
      /**
       * 领取人 (userId)
       */
      takenBy?: string;
      /**
       * 发布人 (userId)
       */
      publishBy?: string;
      /**
       * 领取人 外部id
       */
      foreignTakenBy?: string;
      /**
       * ticket labels
       */
      labels?: string[];
      /**
       * ticket remark
       */
      remark?: string;
      relatedRepos?: string[];
    }[];
    /**
     * 是否 reopened 过
     */
    reopened?: boolean;
    reopenedAt?: string;
    relatedRepos?: string[];
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetTicketRequest {
  ticketId: string;
}
export interface GetTicketResponse {
  body: {
    /**
     * 关联的issue (第三方服务中的issueid)
     */
    issue: string;
    /**
     * ticket titile
     */
    title?: string;
    /**
     * 所属repo (第三方服务中的 repositoryId)
     */
    repository?: string;
    /**
     * 级别
     */
    level?: number;
    /**
     * 状态
     */
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 所属项目 (projectId)
     */
    project?: string;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取时间
     */
    takenAt?: string;
    /**
     * 完成时间
     */
    doneAt?: string;
    /**
     * 发布时间
     */
    publishedAt?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    labels?: string[];
    events?: {
      name:
        | "PUBLISH"
        | "UNPUBLISH"
        | "ASSIGN"
        | "UNASSIGN"
        | "LEVEL"
        | "PRIORITY"
        | "BONUS"
        | "DEADLINE"
        | "DONE"
        | "REOPEN"
        | "LABEL"
        | "REMARK"
        | "INTERATION";
      /**
       * 操作人 (userId)
       */
      user: string;
      /**
       * 级别
       */
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 创建时间
       */
      createdAt?: string;
      /**
       * 优先级
       */
      priority?: 0 | 1 | 2;
      /**
       * 截止时间
       */
      deadline?: string;
      /**
       * 所属迭代 (interationId)
       */
      interation?: string;
      /**
       * 额外暴击奖励
       */
      bonus?: number;
      /**
       * 领取人 (userId)
       */
      takenBy?: string;
      /**
       * 发布人 (userId)
       */
      publishBy?: string;
      /**
       * 领取人 外部id
       */
      foreignTakenBy?: string;
      /**
       * ticket labels
       */
      labels?: string[];
      /**
       * ticket remark
       */
      remark?: string;
      relatedRepos?: string[];
    }[];
    /**
     * 是否 reopened 过
     */
    reopened?: boolean;
    reopenedAt?: string;
    relatedRepos?: string[];
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface DeleteTicketRequest {
  ticketId: string;
}
export interface CreateTicketEventRequest {
  ticketId: string;
  /**
   * Ticket evnet
   */
  body: {
    name:
      | "PUBLISH"
      | "UNPUBLISH"
      | "ASSIGN"
      | "UNASSIGN"
      | "LEVEL"
      | "PRIORITY"
      | "BONUS"
      | "DEADLINE"
      | "DONE"
      | "REOPEN"
      | "LABEL"
      | "REMARK"
      | "INTERATION";
    /**
     * 操作人 (userId)
     */
    user: string;
    /**
     * 级别
     */
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取人 外部id
     */
    foreignTakenBy?: string;
    /**
     * ticket labels
     */
    labels?: string[];
    /**
     * ticket remark
     */
    remark?: string;
    relatedRepos?: string[];
  };
}
export interface CreateTicketEventResponse {
  body: {
    /**
     * 关联的issue (第三方服务中的issueid)
     */
    issue: string;
    /**
     * ticket titile
     */
    title?: string;
    /**
     * 所属repo (第三方服务中的 repositoryId)
     */
    repository?: string;
    /**
     * 级别
     */
    level?: number;
    /**
     * 状态
     */
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 所属项目 (projectId)
     */
    project?: string;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取时间
     */
    takenAt?: string;
    /**
     * 完成时间
     */
    doneAt?: string;
    /**
     * 发布时间
     */
    publishedAt?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    labels?: string[];
    events?: {
      name:
        | "PUBLISH"
        | "UNPUBLISH"
        | "ASSIGN"
        | "UNASSIGN"
        | "LEVEL"
        | "PRIORITY"
        | "BONUS"
        | "DEADLINE"
        | "DONE"
        | "REOPEN"
        | "LABEL"
        | "REMARK"
        | "INTERATION";
      /**
       * 操作人 (userId)
       */
      user: string;
      /**
       * 级别
       */
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 创建时间
       */
      createdAt?: string;
      /**
       * 优先级
       */
      priority?: 0 | 1 | 2;
      /**
       * 截止时间
       */
      deadline?: string;
      /**
       * 所属迭代 (interationId)
       */
      interation?: string;
      /**
       * 额外暴击奖励
       */
      bonus?: number;
      /**
       * 领取人 (userId)
       */
      takenBy?: string;
      /**
       * 发布人 (userId)
       */
      publishBy?: string;
      /**
       * 领取人 外部id
       */
      foreignTakenBy?: string;
      /**
       * ticket labels
       */
      labels?: string[];
      /**
       * ticket remark
       */
      remark?: string;
      relatedRepos?: string[];
    }[];
    /**
     * 是否 reopened 过
     */
    reopened?: boolean;
    reopenedAt?: string;
    relatedRepos?: string[];
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface ListInterationsRequest {
  projectId: string;
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    planStart_gt?: string;
    planStart_lt?: string;
    planEnd_gt?: string;
    planEnd_lt?: string;
    id?: string;
  };
}
export interface ListInterationsResponse {
  body: ({
    /**
     * 迭代名称
     */
    name: string;
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 实际开始时间
     */
    startAt?: string;
    /**
     * 实际结束时间
     */
    endAt?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 迭代描述
     */
    description?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateInteractionRequest {
  projectId: string;
  /**
   * 迭代 Doc
   */
  body: {
    /**
     * 迭代名称
     */
    name: string;
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 实际开始时间
     */
    startAt?: string;
    /**
     * 实际结束时间
     */
    endAt?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 迭代描述
     */
    description?: string;
  };
}
export interface CreateInteractionResponse {
  body: {
    /**
     * 迭代名称
     */
    name: string;
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 实际开始时间
     */
    startAt?: string;
    /**
     * 实际结束时间
     */
    endAt?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 迭代描述
     */
    description?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface GetInterationRequest {
  projectId: string;
  interationId: string;
}
export interface GetInterationResponse {
  body: {
    /**
     * 迭代名称
     */
    name: string;
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 实际开始时间
     */
    startAt?: string;
    /**
     * 实际结束时间
     */
    endAt?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 迭代描述
     */
    description?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface UpdateInterationRequest {
  projectId: string;
  interationId: string;
  /**
   * 迭代 Doc
   */
  body: {
    /**
     * 迭代名称
     */
    name: string;
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 实际开始时间
     */
    startAt?: string;
    /**
     * 实际结束时间
     */
    endAt?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 迭代描述
     */
    description?: string;
  };
}
export interface UpdateInterationResponse {
  body: {
    /**
     * 迭代名称
     */
    name: string;
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 实际开始时间
     */
    startAt?: string;
    /**
     * 实际结束时间
     */
    endAt?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 迭代描述
     */
    description?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface DeleteInterationRequest {
  projectId: string;
  interationId: string;
}
export interface ListProjectsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    name?: string;
    po?: string;
    cm?: string;
    state?: "DOING" | "ARCHIVED";
    planStart_gt?: string;
    planStart_lt?: string;
    planEnd_gt?: string;
    planEnd_lt?: string;
    id?: string;
  };
}
export interface ListProjectsResponse {
  body: ({
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateProjectRequest {
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  };
}
export interface CreateProjectResponse {
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface GetProjectRequest {
  projectId: string;
}
export interface GetProjectResponse {
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface UpdateProjectRequest {
  projectId: string;
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  };
}
export interface UpdateProjectResponse {
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface DeleteProjectRequest {
  projectId: string;
}
export interface CreateProjectDocRequest {
  projectId: string;
  body: {
    /**
     * 文档标题
     */
    title: string;
    /**
     * 文档内容
     */
    content: string;
    /**
     * 更新人(userId)
     */
    updatedBy?: string;
    /**
     * 创建人(userId)
     */
    createdBy?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface CreateProjectDocResponse {
  body: {
    /**
     * 文档标题
     */
    title: string;
    /**
     * 文档内容
     */
    content: string;
    /**
     * 更新人(userId)
     */
    updatedBy?: string;
    /**
     * 创建人(userId)
     */
    createdBy?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface GetProjectSummaryRequest {
  projectId: string;
}
export interface GetProjectSummaryResponse {
  /**
   * 项目统计
   */
  body: {
    /**
     * 统计类型
     */
    type?: string;
    /**
     * 统计数据
     */
    data?: {
      /**
       * 名称
       */
      name?: string;
      /**
       * 值
       */
      value?: string;
    }[];
    /**
     * 总数
     */
    total?: number;
  }[];
}
export interface UpdateProjectDocRequest {
  projectId: string;
  docId: string;
  body: {
    /**
     * 文档标题
     */
    title: string;
    /**
     * 文档内容
     */
    content: string;
    /**
     * 更新人(userId)
     */
    updatedBy?: string;
    /**
     * 创建人(userId)
     */
    createdBy?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface UpdateProjectDocResponse {
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface CreateProjectEventRequest {
  projectId: string;
  /**
   * 项目事件
   */
  body: {
    /**
     * 事件名称
     */
    name?: "CHANGE_TOTAL" | "SHARED";
    /**
     * 项目金额总数
     */
    total?: number;
    /**
     * 分成细则
     */
    shared?: {
      /**
       * 分成总金额
       */
      total?: number;
      /**
       * 分成事项
       */
      remark?: string;
      detail?: {
        /**
         * 员工id
         */
        staff?: string;
        /**
         * 在项目中的职位
         */
        position?: "PO" | "CM";
        /**
         * 分成中的比例，百分比
         */
        percent?: number;
      }[];
    };
  };
}
export interface CreateProjectEventResponse {
  body: {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 产品负责人 (userId)
     */
    po?: string[];
    /**
     * 技术负责人 (userId)
     */
    cm?: string[];
    /**
     * 包含的工程
     */
    repositories?: string[];
    /**
     * 计划开始时间
     */
    planStartAt: string;
    /**
     * 计划结束时间
     */
    planEndAt: string;
    /**
     * 项目状态
     */
    state?: "DOING" | "ARCHIVED";
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 项目负责人
     */
    owner?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目管理人员
     */
    manager?: {
      /**
       * 人员
       */
      staff?: string;
      /**
       * 职位
       */
      position?: string;
    };
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface GetInteractionsSummaryRequest {
  query?: {
    _group: string[];
    project?: string;
    planStart_gt?: string;
    planStart_lt?: string;
    planEnd_gt?: string;
    planEnd_lt?: string;
  };
}
export interface GetInteractionsSummaryResponse {
  body: {}[];
}
export interface GetTicketsSummaryRequest {
  query?: {
    _group: string[];
    _exist?: string[];
    state?: "PLANNING" | "TODO" | "DOING" | "DONE";
    takenBy?: string;
    project?: string;
    interation?: string;
  };
}
export interface GetTicketsSummaryResponse {
  body: {}[];
}
export interface GetTradeSummaryRequest {
  query?: {
    _group: string[];
    project?: string;
    staff?: string;
  };
}
export interface GetTradeSummaryResponse {
  body: {
    /**
     * 对应项目
     */
    project?: string;
    /**
     * 对应员工
     */
    staff?: string;
    /**
     * 对应操作者
     */
    handler?: string;
    /**
     * 总支出
     */
    totalExp?: string;
  }[];
}
export interface GetTradeSummaryByMonthRequest {
  query?: {
    staff?: string;
  };
}
export interface GetTradeSummaryByMonthResponse {
  body: {
    /**
     * 对应项目
     */
    project?: string;
    /**
     * 对应员工
     */
    staff?: string;
    /**
     * 对应操作者
     */
    handler?: string;
    /**
     * 总支出
     */
    totalExp?: string;
  }[];
}
export interface GetTicketDoneSummaryRequest {
  query?: {
    start?: string;
    end?: string;
  };
}
export interface GetTicketDoneSummaryResponse {
  body: {}[];
}
export interface GetTicketCoverageSummaryRequest {
  query?: {
    start?: string;
    end?: string;
  };
}
export interface GetTicketCoverageSummaryResponse {
  body: {}[];
}
export interface ListStaffsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    name?: string;
    type?: string;
    position?: string;
  };
}
export interface ListStaffsResponse {
  body: ({
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateStaffRequest {
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    /**
     * 邀请码
     */
    code?: string;
  };
}
export interface CreateStaffResponse {
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface UpsertStaffRequest {
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    /**
     * 邀请码
     */
    code?: string;
  };
}
export interface UpsertStaffResponse {
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface UpdateStaffRequest {
  staffId: string;
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  };
}
export interface UpdateStaffResponse {
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface GetStaffRequest {
  staffId: string;
}
export interface GetStaffResponse {
  body: {
    /**
     * 员工id， 同stargate 中的id
     */
    id: string;
    /**
     * 工号
     */
    number?: number;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 用户类型
     */
    type?: "36NODE" | "ADVENTURE";
    /**
     * 职位
     */
    position?: "PM" | "DEVELOPER" | "DESIGNER";
    /**
     * 等级
     */
    level?: number;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 身份证号
     */
    idNumber?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 微信
     */
    weixin?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 个人邮箱
     */
    email?: string;
    /**
     * 公司邮箱
     */
    companyEmail?: string;
    /**
     * google账号
     */
    google?: string;
    /**
     * icloud账号
     */
    icloud?: string;
    /**
     * github账号
     */
    github?: string;
    /**
     * 用户头像url
     */
    avatar?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface DeleteStaffRequest {
  staffId: string;
}
export interface GetStaffWalletRequest {
  staffId: string;
}
export interface GetStaffWalletResponse {
  body: {
    /**
     * 钱包总余额
     */
    balance?: number;
    /**
     * 对应员工
     */
    staff?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface ListWalletsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    staff?: string;
  };
}
export interface ListWalletsResponse {
  body: ({
    /**
     * 钱包总余额
     */
    balance?: number;
    /**
     * 对应员工
     */
    staff?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListTradesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    staff?: string;
    type?: string;
    staffName?: string;
    staffGithub?: string;
    createdAt_gt?: string;
    createdAt_lt?: string;
  };
}
export interface ListTradesResponse {
  body: ({
    /**
     * 对应的项目
     */
    project?: string;
    /**
     * 对应的员工
     */
    staff: string;
    /**
     * 交易类型, 分成, 任务, 结算
     */
    type: "SHARED" | "TICKET" | "SETTLE";
    /**
     * 本次交易总金额
     */
    amount: number;
    /**
     * 操作人
     */
    handler: string;
    /**
     * staff name
     */
    staffName?: string;
    /**
     * staff github
     */
    staffGithub?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateTradeRequest {
  /**
   * 项目交易记录
   */
  body: {
    /**
     * 对应的项目
     */
    project?: string;
    /**
     * 对应的员工
     */
    staff: string;
    /**
     * 交易类型, 分成, 任务, 结算
     */
    type: "SHARED" | "TICKET" | "SETTLE";
    /**
     * 本次交易总金额
     */
    amount: number;
    /**
     * 操作人
     */
    handler: string;
    /**
     * staff name
     */
    staffName?: string;
    /**
     * staff github
     */
    staffGithub?: string;
  };
}
export interface CreateTradeResponse {
  body: {
    /**
     * 对应的项目
     */
    project?: string;
    /**
     * 对应的员工
     */
    staff: string;
    /**
     * 交易类型, 分成, 任务, 结算
     */
    type: "SHARED" | "TICKET" | "SETTLE";
    /**
     * 本次交易总金额
     */
    amount: number;
    /**
     * 操作人
     */
    handler: string;
    /**
     * staff name
     */
    staffName?: string;
    /**
     * staff github
     */
    staffGithub?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface CreateInvitationRequest {
  /**
   * 邀请函，包含邀请码
   */
  body: {
    code?: string;
    email?: string;
    /**
     * 邮件是否已经发送
     */
    sent?: boolean;
    /**
     * 邀请码过期时间
     */
    expiredAt?: Date;
    /**
     * 邀请码是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 备注
     */
    remark?: string;
  };
}
export interface CreateInvitationResponse {
  body: {
    code?: string;
    email?: string;
    /**
     * 邮件是否已经发送
     */
    sent?: boolean;
    /**
     * 邀请码过期时间
     */
    expiredAt?: Date;
    /**
     * 邀请码是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 备注
     */
    remark?: string;
  } & {
    id: string;
    updatedAt?: string;
    createdAt?: string;
  };
}
export interface ProjectDoc {
  /**
   * 项目名称
   */
  name: string;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 产品负责人 (userId)
   */
  po?: string[];
  /**
   * 技术负责人 (userId)
   */
  cm?: string[];
  /**
   * 包含的工程
   */
  repositories?: string[];
  /**
   * 计划开始时间
   */
  planStartAt: string;
  /**
   * 计划结束时间
   */
  planEndAt: string;
  /**
   * 项目状态
   */
  state?: "DOING" | "ARCHIVED";
  /**
   * 项目logo
   */
  logo?: string;
  /**
   * 项目负责人
   */
  owner?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 项目管理人员
   */
  manager?: {
    /**
     * 人员
     */
    staff?: string;
    /**
     * 职位
     */
    position?: string;
  };
}

export type Project = {
  /**
   * 项目名称
   */
  name: string;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 产品负责人 (userId)
   */
  po?: string[];
  /**
   * 技术负责人 (userId)
   */
  cm?: string[];
  /**
   * 包含的工程
   */
  repositories?: string[];
  /**
   * 计划开始时间
   */
  planStartAt: string;
  /**
   * 计划结束时间
   */
  planEndAt: string;
  /**
   * 项目状态
   */
  state?: "DOING" | "ARCHIVED";
  /**
   * 项目logo
   */
  logo?: string;
  /**
   * 项目负责人
   */
  owner?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 项目管理人员
   */
  manager?: {
    /**
     * 人员
     */
    staff?: string;
    /**
     * 职位
     */
    position?: string;
  };
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

/**
 * 项目事件
 */
export interface ProjectEvent {
  /**
   * 事件名称
   */
  name?: "CHANGE_TOTAL" | "SHARED";
  /**
   * 项目金额总数
   */
  total?: number;
  /**
   * 分成细则
   */
  shared?: {
    /**
     * 分成总金额
     */
    total?: number;
    /**
     * 分成事项
     */
    remark?: string;
    detail?: {
      /**
       * 员工id
       */
      staff?: string;
      /**
       * 在项目中的职位
       */
      position?: "PO" | "CM";
      /**
       * 分成中的比例，百分比
       */
      percent?: number;
    }[];
  };
}

/**
 * 迭代 Doc
 */
export interface InterationDoc {
  /**
   * 迭代名称
   */
  name: string;
  /**
   * 计划开始时间
   */
  planStartAt: string;
  /**
   * 计划结束时间
   */
  planEndAt: string;
  /**
   * 实际开始时间
   */
  startAt?: string;
  /**
   * 实际结束时间
   */
  endAt?: string;
  /**
   * 所属的 project (projectId)
   */
  project?: string;
  /**
   * 迭代描述
   */
  description?: string;
}

/**
 * 项目统计
 */
export type ProjectSummary = {
  /**
   * 统计类型
   */
  type?: string;
  /**
   * 统计数据
   */
  data?: {
    /**
     * 名称
     */
    name?: string;
    /**
     * 值
     */
    value?: string;
  }[];
  /**
   * 总数
   */
  total?: number;
}[];

/**
 * 项目文档
 */
export interface ProjectDocumentDoc {
  /**
   * 文档标题
   */
  title: string;
  /**
   * 文档内容
   */
  content: string;
  /**
   * 更新人(userId)
   */
  updatedBy?: string;
  /**
   * 创建人(userId)
   */
  createdBy?: string;
}

export type ProjectDocument = {
  /**
   * 文档标题
   */
  title: string;
  /**
   * 文档内容
   */
  content: string;
  /**
   * 更新人(userId)
   */
  updatedBy?: string;
  /**
   * 创建人(userId)
   */
  createdBy?: string;
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

export type Interation = {
  /**
   * 迭代名称
   */
  name: string;
  /**
   * 计划开始时间
   */
  planStartAt: string;
  /**
   * 计划结束时间
   */
  planEndAt: string;
  /**
   * 实际开始时间
   */
  startAt?: string;
  /**
   * 实际结束时间
   */
  endAt?: string;
  /**
   * 所属的 project (projectId)
   */
  project?: string;
  /**
   * 迭代描述
   */
  description?: string;
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

/**
 * 任务统计
 */
export interface TicketsSummary {}

/**
 * 迭代统计
 */
export interface InterationSummary {}

/**
 * Repo Doc
 */
export interface Repository {
  /**
   * 在第三方服务中的id
   */
  id?: string;
  /**
   * 仓库名称
   */
  name?: string;
  /**
   * 仓库全称
   */
  fullName?: string;
  /**
   * url for clone
   */
  gitUrl?: string;
  /**
   * url
   */
  htmlUrl?: string;
  /**
   * github user username
   */
  owner?: string;
  /**
   * 是否私有
   */
  private?: boolean;
  /**
   * 最近push时间
   */
  pushedAt?: string;
  /**
   * 创建时间
   */
  createdAt?: string;
  /**
   * 更新时间
   */
  updatedAt?: string;
  /**
   * readme 内容
   */
  readme?: string;
  /**
   * 主题
   */
  topics?: string[];
  collaborators?: string[];
  technologies?: string[];
  types?: string[];
}

/**
 * Issue Doc
 */
export interface Issue {
  /**
   * 在第三方服务中的id
   */
  id?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 所属repo (repositoryId)
   */
  repository?: string;
  /**
   * issue 号
   */
  number?: number;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 创建者
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 关闭时间
   */
  closeAt?: string;
  /**
   * url
   */
  htmlUrl?: string;
  /**
   * github user username
   */
  user?: string;
  assignees?: string[];
  /**
   * 创建时间
   */
  createdAt?: string;
  /**
   * 更新时间
   */
  updatedAt?: string;
}

/**
 * Issue Comment Doc
 */
export interface IssueComment {
  /**
   * content of comment
   */
  body?: string;
  /**
   * writer of comment
   */
  user?: string;
  /**
   * 更新时间
   */
  updatedAt?: string;
  /**
   * github url of comment
   */
  htmlUrl?: string;
  /**
   * role of user
   */
  authorAssociation?: string;
}

/**
 * Pr Doc
 */
export interface Pr {
  /**
   * 在第三方服务中的id
   */
  id?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 所属repo (repositoryId)
   */
  repository?: string;
  /**
   * pr 号
   */
  number?: number;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * pr状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 关闭时间
   */
  closeAt?: string;
  /**
   * url
   */
  htmlUrl?: string;
  /**
   * github user username
   */
  user?: string;
  assignees?: string[];
  /**
   * 创建时间
   */
  createdAt?: string;
  /**
   * 更新时间
   */
  updatedAt?: string;
}

/**
 * Ticket Doc
 */
export interface TicketDoc {
  /**
   * 关联的issue (第三方服务中的issueid)
   */
  issue: string;
  /**
   * ticket titile
   */
  title?: string;
  /**
   * 所属repo (第三方服务中的 repositoryId)
   */
  repository?: string;
  /**
   * 级别
   */
  level?: number;
  /**
   * 状态
   */
  state?: "PLANNING" | "TODO" | "DOING" | "DONE";
  /**
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 截止时间
   */
  deadline?: string;
  /**
   * 所属迭代 (interationId)
   */
  interation?: string;
  /**
   * 所属项目 (projectId)
   */
  project?: string;
  /**
   * 领取人 (userId)
   */
  takenBy?: string;
  /**
   * 发布人 (userId)
   */
  publishBy?: string;
  /**
   * 领取时间
   */
  takenAt?: string;
  /**
   * 完成时间
   */
  doneAt?: string;
  /**
   * 发布时间
   */
  publishedAt?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 额外暴击奖励
   */
  bonus?: number;
  labels?: string[];
  events?: {
    name:
      | "PUBLISH"
      | "UNPUBLISH"
      | "ASSIGN"
      | "UNASSIGN"
      | "LEVEL"
      | "PRIORITY"
      | "BONUS"
      | "DEADLINE"
      | "DONE"
      | "REOPEN"
      | "LABEL"
      | "REMARK"
      | "INTERATION";
    /**
     * 操作人 (userId)
     */
    user: string;
    /**
     * 级别
     */
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取人 外部id
     */
    foreignTakenBy?: string;
    /**
     * ticket labels
     */
    labels?: string[];
    /**
     * ticket remark
     */
    remark?: string;
    relatedRepos?: string[];
  }[];
  /**
   * 是否 reopened 过
   */
  reopened?: boolean;
  reopenedAt?: string;
  relatedRepos?: string[];
}

/**
 * Ticket Label
 */
export interface Label {
  /**
   * label id
   */
  id?: string;
  /**
   * label name
   */
  name?: string;
  /**
   * label color
   */
  color?: string;
}

/**
 * Ticket evnet
 */
export interface TicketEvent {
  name:
    | "PUBLISH"
    | "UNPUBLISH"
    | "ASSIGN"
    | "UNASSIGN"
    | "LEVEL"
    | "PRIORITY"
    | "BONUS"
    | "DEADLINE"
    | "DONE"
    | "REOPEN"
    | "LABEL"
    | "REMARK"
    | "INTERATION";
  /**
   * 操作人 (userId)
   */
  user: string;
  /**
   * 级别
   */
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 创建时间
   */
  createdAt?: string;
  /**
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 截止时间
   */
  deadline?: string;
  /**
   * 所属迭代 (interationId)
   */
  interation?: string;
  /**
   * 额外暴击奖励
   */
  bonus?: number;
  /**
   * 领取人 (userId)
   */
  takenBy?: string;
  /**
   * 发布人 (userId)
   */
  publishBy?: string;
  /**
   * 领取人 外部id
   */
  foreignTakenBy?: string;
  /**
   * ticket labels
   */
  labels?: string[];
  /**
   * ticket remark
   */
  remark?: string;
  relatedRepos?: string[];
}

export type Ticket = {
  /**
   * 关联的issue (第三方服务中的issueid)
   */
  issue: string;
  /**
   * ticket titile
   */
  title?: string;
  /**
   * 所属repo (第三方服务中的 repositoryId)
   */
  repository?: string;
  /**
   * 级别
   */
  level?: number;
  /**
   * 状态
   */
  state?: "PLANNING" | "TODO" | "DOING" | "DONE";
  /**
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 截止时间
   */
  deadline?: string;
  /**
   * 所属迭代 (interationId)
   */
  interation?: string;
  /**
   * 所属项目 (projectId)
   */
  project?: string;
  /**
   * 领取人 (userId)
   */
  takenBy?: string;
  /**
   * 发布人 (userId)
   */
  publishBy?: string;
  /**
   * 领取时间
   */
  takenAt?: string;
  /**
   * 完成时间
   */
  doneAt?: string;
  /**
   * 发布时间
   */
  publishedAt?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 额外暴击奖励
   */
  bonus?: number;
  labels?: string[];
  events?: {
    name:
      | "PUBLISH"
      | "UNPUBLISH"
      | "ASSIGN"
      | "UNASSIGN"
      | "LEVEL"
      | "PRIORITY"
      | "BONUS"
      | "DEADLINE"
      | "DONE"
      | "REOPEN"
      | "LABEL"
      | "REMARK"
      | "INTERATION";
    /**
     * 操作人 (userId)
     */
    user: string;
    /**
     * 级别
     */
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 创建时间
     */
    createdAt?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 截止时间
     */
    deadline?: string;
    /**
     * 所属迭代 (interationId)
     */
    interation?: string;
    /**
     * 额外暴击奖励
     */
    bonus?: number;
    /**
     * 领取人 (userId)
     */
    takenBy?: string;
    /**
     * 发布人 (userId)
     */
    publishBy?: string;
    /**
     * 领取人 外部id
     */
    foreignTakenBy?: string;
    /**
     * ticket labels
     */
    labels?: string[];
    /**
     * ticket remark
     */
    remark?: string;
    relatedRepos?: string[];
  }[];
  /**
   * 是否 reopened 过
   */
  reopened?: boolean;
  reopenedAt?: string;
  relatedRepos?: string[];
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

export interface StaffDoc {
  /**
   * 员工id， 同stargate 中的id
   */
  id: string;
  /**
   * 工号
   */
  number?: number;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 用户类型
   */
  type?: "36NODE" | "ADVENTURE";
  /**
   * 职位
   */
  position?: "PM" | "DEVELOPER" | "DESIGNER";
  /**
   * 等级
   */
  level?: number;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 身份证号
   */
  idNumber?: string;
  /**
   * 城市
   */
  city?: string;
  /**
   * 微信
   */
  weixin?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 个人邮箱
   */
  email?: string;
  /**
   * 公司邮箱
   */
  companyEmail?: string;
  /**
   * google账号
   */
  google?: string;
  /**
   * icloud账号
   */
  icloud?: string;
  /**
   * github账号
   */
  github?: string;
  /**
   * 用户头像url
   */
  avatar?: string;
}

export type Staff = {
  /**
   * 员工id， 同stargate 中的id
   */
  id: string;
  /**
   * 工号
   */
  number?: number;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 用户类型
   */
  type?: "36NODE" | "ADVENTURE";
  /**
   * 职位
   */
  position?: "PM" | "DEVELOPER" | "DESIGNER";
  /**
   * 等级
   */
  level?: number;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 身份证号
   */
  idNumber?: string;
  /**
   * 城市
   */
  city?: string;
  /**
   * 微信
   */
  weixin?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 个人邮箱
   */
  email?: string;
  /**
   * 公司邮箱
   */
  companyEmail?: string;
  /**
   * google账号
   */
  google?: string;
  /**
   * icloud账号
   */
  icloud?: string;
  /**
   * github账号
   */
  github?: string;
  /**
   * 用户头像url
   */
  avatar?: string;
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

export type CreateStaffDoc = {
  /**
   * 员工id， 同stargate 中的id
   */
  id: string;
  /**
   * 工号
   */
  number?: number;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 用户类型
   */
  type?: "36NODE" | "ADVENTURE";
  /**
   * 职位
   */
  position?: "PM" | "DEVELOPER" | "DESIGNER";
  /**
   * 等级
   */
  level?: number;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 身份证号
   */
  idNumber?: string;
  /**
   * 城市
   */
  city?: string;
  /**
   * 微信
   */
  weixin?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 个人邮箱
   */
  email?: string;
  /**
   * 公司邮箱
   */
  companyEmail?: string;
  /**
   * google账号
   */
  google?: string;
  /**
   * icloud账号
   */
  icloud?: string;
  /**
   * github账号
   */
  github?: string;
  /**
   * 用户头像url
   */
  avatar?: string;
} & {
  /**
   * 邀请码
   */
  code?: string;
};

/**
 * 项目钱包
 */
export interface WalletDoc {
  /**
   * 钱包总余额
   */
  balance?: number;
  /**
   * 对应员工
   */
  staff?: string;
}

export type Wallet = {
  /**
   * 钱包总余额
   */
  balance?: number;
  /**
   * 对应员工
   */
  staff?: string;
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

/**
 * 项目交易记录
 */
export interface TradeDoc {
  /**
   * 对应的项目
   */
  project?: string;
  /**
   * 对应的员工
   */
  staff: string;
  /**
   * 交易类型, 分成, 任务, 结算
   */
  type: "SHARED" | "TICKET" | "SETTLE";
  /**
   * 本次交易总金额
   */
  amount: number;
  /**
   * 操作人
   */
  handler: string;
  /**
   * staff name
   */
  staffName?: string;
  /**
   * staff github
   */
  staffGithub?: string;
}

export type Trade = {
  /**
   * 对应的项目
   */
  project?: string;
  /**
   * 对应的员工
   */
  staff: string;
  /**
   * 交易类型, 分成, 任务, 结算
   */
  type: "SHARED" | "TICKET" | "SETTLE";
  /**
   * 本次交易总金额
   */
  amount: number;
  /**
   * 操作人
   */
  handler: string;
  /**
   * staff name
   */
  staffName?: string;
  /**
   * staff github
   */
  staffGithub?: string;
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

export interface TradeSummary {
  /**
   * 对应项目
   */
  project?: string;
  /**
   * 对应员工
   */
  staff?: string;
  /**
   * 对应操作者
   */
  handler?: string;
  /**
   * 总支出
   */
  totalExp?: string;
}

export interface TicketDoneSummary {}

export interface TicketCoverageSummary {}

/**
 * 创建邀请函所需参数
 */
export interface CreateInvitationBody {
  /**
   * 邀请码过期时间，默认7天
   */
  expiredAt?: Date;
  email: string;
  /**
   * 备注
   */
  remark?: string;
}

/**
 * 邀请函，包含邀请码
 */
export interface InvitationDoc {
  code?: string;
  email?: string;
  /**
   * 邮件是否已经发送
   */
  sent?: boolean;
  /**
   * 邀请码过期时间
   */
  expiredAt?: Date;
  /**
   * 邀请码是否已经使用
   */
  used?: boolean;
  /**
   * 邀请码使用时间
   */
  usedAt?: Date;
  /**
   * 备注
   */
  remark?: string;
}

export type Invitation = {
  code?: string;
  email?: string;
  /**
   * 邮件是否已经发送
   */
  sent?: boolean;
  /**
   * 邀请码过期时间
   */
  expiredAt?: Date;
  /**
   * 邀请码是否已经使用
   */
  used?: boolean;
  /**
   * 邀请码使用时间
   */
  usedAt?: Date;
  /**
   * 备注
   */
  remark?: string;
} & {
  id: string;
  updatedAt?: string;
  createdAt?: string;
};

/**
 * release of repository
 */
export interface Release {
  /**
   * 暂时不提供
   */
  version?: string;
}

export interface MongoDefault {
  id: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface Err {
  code: string;
  message: string;
}

export = SDK;
