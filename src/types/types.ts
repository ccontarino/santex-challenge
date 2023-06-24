export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
  Money: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  activeChannel: Channel;
  activeCustomer?: Maybe<Customer>;
  activeOrder?: Maybe<Order>;
  availableCountries: Array<Country>;
  collections: CollectionList;
  collection?: Maybe<Collection>;
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  facets: FacetList;
  facet?: Maybe<Facet>;
  me?: Maybe<CurrentUser>;
  nextOrderStates: Array<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderByCode?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  search: SearchResponse;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryFacetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItemToOrder: UpdateOrderItemsResult;
  removeOrderLine: RemoveOrderItemsResult;
  removeAllOrderLines: RemoveOrderItemsResult;
  adjustOrderLine: UpdateOrderItemsResult;
  applyCouponCode: ApplyCouponCodeResult;
  removeCouponCode?: Maybe<Order>;
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  setOrderShippingAddress: ActiveOrderResult;
  setOrderBillingAddress: ActiveOrderResult;
  setOrderCustomFields: ActiveOrderResult;
  setOrderShippingMethod: SetOrderShippingMethodResult;
  addPaymentToOrder: AddPaymentToOrderResult;
  setCustomerForOrder: SetCustomerForOrderResult;
  login: NativeAuthenticationResult;
  authenticate: AuthenticationResult;
  logout: Success;
  registerCustomerAccount: RegisterCustomerAccountResult;
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  updateCustomer: Customer;
  createCustomerAddress: Address;
  updateCustomerAddress: Address;
  deleteCustomerAddress: Success;
  verifyCustomerAccount: VerifyCustomerAccountResult;
  updateCustomerPassword: UpdateCustomerPasswordResult;
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  resetPassword: ResetPasswordResult;
};


export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID']['input'];
};


export type MutationAdjustOrderLineArgs = {
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String']['input'];
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Array<Scalars['ID']['input']>;
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationLoginArgs = {
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVerifyCustomerAccountArgs = {
  token: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  password: Scalars['String']['input'];
  newEmailAddress: Scalars['String']['input'];
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String']['input'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Address = Node & {
  __typename?: 'Address';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type Asset = Node & {
  __typename?: 'Asset';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  type: AssetType;
  fileSize: Scalars['Int']['output'];
  mimeType: Scalars['String']['output'];
  width: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  source: Scalars['String']['output'];
  preview: Scalars['String']['output'];
  focalPoint?: Maybe<Coordinate>;
  tags: Array<Tag>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int']['output'];
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  channels: Array<CurrentUserChannel>;
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  code: Scalars['String']['output'];
  permissions: Array<Permission>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  code: Scalars['String']['output'];
  token: Scalars['String']['output'];
  defaultTaxZone?: Maybe<Zone>;
  defaultShippingZone?: Maybe<Zone>;
  defaultLanguageCode: LanguageCode;
  availableLanguageCodes?: Maybe<Array<LanguageCode>>;
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode: CurrencyCode;
  defaultCurrencyCode: CurrencyCode;
  availableCurrencyCodes: Array<CurrencyCode>;
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  outOfStockThreshold?: Maybe<Scalars['Int']['output']>;
  pricesIncludeTax: Scalars['Boolean']['output'];
  seller?: Maybe<Seller>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  breadcrumbs: Array<CollectionBreadcrumb>;
  position: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  parent?: Maybe<Collection>;
  parentId: Scalars['ID']['output'];
  children?: Maybe<Array<Collection>>;
  filters: Array<ConfigurableOperation>;
  translations: Array<CollectionTranslation>;
  productVariants: ProductVariantList;
  customFields?: Maybe<Scalars['JSON']['output']>;
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int']['output'];
};

export enum GlobalFlag {
  True = 'TRUE',
  False = 'FALSE',
  Inherit = 'INHERIT'
}

export enum AdjustmentType {
  Promotion = 'PROMOTION',
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER'
}

export enum DeletionResult {
  Deleted = 'DELETED',
  NotDeleted = 'NOT_DELETED'
}

export enum Permission {
  Authenticated = 'Authenticated',
  SuperAdmin = 'SuperAdmin',
  Owner = 'Owner',
  Public = 'Public',
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateAsset = 'CreateAsset',
  ReadAsset = 'ReadAsset',
  UpdateAsset = 'UpdateAsset',
  DeleteAsset = 'DeleteAsset',
  CreateChannel = 'CreateChannel',
  ReadChannel = 'ReadChannel',
  UpdateChannel = 'UpdateChannel',
  DeleteChannel = 'DeleteChannel',
  CreateCollection = 'CreateCollection',
  ReadCollection = 'ReadCollection',
  UpdateCollection = 'UpdateCollection',
  DeleteCollection = 'DeleteCollection',
  CreateCountry = 'CreateCountry',
  ReadCountry = 'ReadCountry',
  UpdateCountry = 'UpdateCountry',
  DeleteCountry = 'DeleteCountry',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateCustomerGroup = 'CreateCustomerGroup',
  ReadCustomerGroup = 'ReadCustomerGroup',
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  CreateFacet = 'CreateFacet',
  ReadFacet = 'ReadFacet',
  UpdateFacet = 'UpdateFacet',
  DeleteFacet = 'DeleteFacet',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreatePaymentMethod = 'CreatePaymentMethod',
  ReadPaymentMethod = 'ReadPaymentMethod',
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  DeletePaymentMethod = 'DeletePaymentMethod',
  CreateProduct = 'CreateProduct',
  ReadProduct = 'ReadProduct',
  UpdateProduct = 'UpdateProduct',
  DeleteProduct = 'DeleteProduct',
  CreatePromotion = 'CreatePromotion',
  ReadPromotion = 'ReadPromotion',
  UpdatePromotion = 'UpdatePromotion',
  DeletePromotion = 'DeletePromotion',
  CreateShippingMethod = 'CreateShippingMethod',
  ReadShippingMethod = 'ReadShippingMethod',
  UpdateShippingMethod = 'UpdateShippingMethod',
  DeleteShippingMethod = 'DeleteShippingMethod',
  CreateTag = 'CreateTag',
  ReadTag = 'ReadTag',
  UpdateTag = 'UpdateTag',
  DeleteTag = 'DeleteTag',
  CreateTaxCategory = 'CreateTaxCategory',
  ReadTaxCategory = 'ReadTaxCategory',
  UpdateTaxCategory = 'UpdateTaxCategory',
  DeleteTaxCategory = 'DeleteTaxCategory',
  CreateTaxRate = 'CreateTaxRate',
  ReadTaxRate = 'ReadTaxRate',
  UpdateTaxRate = 'UpdateTaxRate',
  DeleteTaxRate = 'DeleteTaxRate',
  CreateSeller = 'CreateSeller',
  ReadSeller = 'ReadSeller',
  UpdateSeller = 'UpdateSeller',
  DeleteSeller = 'DeleteSeller',
  CreateStockLocation = 'CreateStockLocation',
  ReadStockLocation = 'ReadStockLocation',
  UpdateStockLocation = 'UpdateStockLocation',
  DeleteStockLocation = 'DeleteStockLocation',
  CreateSystem = 'CreateSystem',
  ReadSystem = 'ReadSystem',
  UpdateSystem = 'UpdateSystem',
  DeleteSystem = 'DeleteSystem',
  CreateZone = 'CreateZone',
  ReadZone = 'ReadZone',
  UpdateZone = 'UpdateZone',
  DeleteZone = 'DeleteZone'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum ErrorCode {
  UnknownError = 'UNKNOWN_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  GuestCheckoutError = 'GUEST_CHECKOUT_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR'
}

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  authenticationError: Scalars['String']['output'];
};

export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
  fromState: Scalars['String']['output'];
  toState: Scalars['String']['output'];
};

export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type GuestCheckoutError = ErrorResult & {
  __typename?: 'GuestCheckoutError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  errorDetail: Scalars['String']['output'];
};

export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  maxItems: Scalars['Int']['output'];
};

export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  quantityAvailable: Scalars['Int']['output'];
  order: Order;
};

export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  couponCode: Scalars['String']['output'];
};

export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  couponCode: Scalars['String']['output'];
};

export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  couponCode: Scalars['String']['output'];
  limit: Scalars['Int']['output'];
};

export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String']['output'];
  type: AdjustmentType;
  description: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  required: Scalars['Boolean']['output'];
  defaultValue?: Maybe<Scalars['JSON']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  code: Scalars['String']['output'];
  args: Array<ConfigArg>;
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  code: Scalars['String']['output'];
  args: Array<ConfigArgDefinition>;
  description: Scalars['String']['output'];
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  result: DeletionResult;
  message?: Maybe<Scalars['String']['output']>;
};

export type ConfigArgInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ConfigurableOperationInput = {
  code: Scalars['String']['input'];
  arguments: Array<ConfigArgInput>;
};

export type StringOperators = {
  eq?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdOperators = {
  eq?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NumberRange = {
  start: Scalars['Float']['input'];
  end: Scalars['Float']['input'];
};

export type NumberOperators = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  between?: InputMaybe<NumberRange>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateRange = {
  start: Scalars['DateTime']['input'];
  end: Scalars['DateTime']['input'];
};

export type DateOperators = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
  after?: InputMaybe<Scalars['DateTime']['input']>;
  between?: InputMaybe<DateRange>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringListOperators = {
  inList: Scalars['String']['input'];
};

export type NumberListOperators = {
  inList: Scalars['Float']['input'];
};

export type BooleanListOperators = {
  inList: Scalars['Boolean']['input'];
};

export type IdListOperators = {
  inList: Scalars['ID']['input'];
};

export type DateListOperators = {
  inList: Scalars['DateTime']['input'];
};

export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']['input']>;
  or?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type SearchInput = {
  term?: InputMaybe<Scalars['String']['input']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  collectionSlug?: InputMaybe<Scalars['String']['input']>;
  groupByProduct?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SearchResultSortParameter>;
};

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type CreateCustomerInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  emailAddress: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type CreateAddressInput = {
  fullName?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateAddressInput = {
  id: Scalars['ID']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean']['output'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  id: Scalars['ID']['output'];
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  isEligible: Scalars['Boolean']['output'];
  eligibilityMessage?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type UpdateOrderItemsResult = Order | OrderModificationError | OrderLimitError | NegativeQuantityError | InsufficientStockError;

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type SetOrderShippingMethodResult = Order | OrderModificationError | IneligibleShippingMethodError | NoActiveOrderError;

export type ApplyCouponCodeResult = Order | CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError;

export enum CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export type CustomField = {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<StringFieldOption>>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  value: Scalars['String']['output'];
  label?: Maybe<Array<LocalizedString>>;
};

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  step?: Maybe<Scalars['Float']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  min?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['String']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  entity: Scalars['String']['output'];
  scalarFields: Array<Scalars['String']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
  __typename?: 'LocaleTextCustomFieldConfig';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  list: Scalars['Boolean']['output'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  nullable?: Maybe<Scalars['Boolean']['output']>;
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String']['output'];
};

export type CustomFieldConfig = StringCustomFieldConfig | LocaleStringCustomFieldConfig | IntCustomFieldConfig | FloatCustomFieldConfig | BooleanCustomFieldConfig | DateTimeCustomFieldConfig | RelationCustomFieldConfig | TextCustomFieldConfig | LocaleTextCustomFieldConfig;

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  customers: CustomerList;
  customFields?: Maybe<Scalars['JSON']['output']>;
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CustomerSortParameter>;
  filter?: InputMaybe<CustomerFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  title?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  emailAddress: Scalars['String']['output'];
  addresses?: Maybe<Array<Address>>;
  orders: OrderList;
  user?: Maybe<User>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int']['output'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  facet: Facet;
  name: Scalars['String']['output'];
  code: Scalars['String']['output'];
  translations: Array<FacetValueTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  code: Scalars['String']['output'];
  values: Array<FacetValue>;
  translations: Array<FacetTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int']['output'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  type: HistoryEntryType;
  data: Scalars['JSON']['output'];
};

export enum HistoryEntryType {
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  OrderStateTransition = 'ORDER_STATE_TRANSITION',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderNote = 'ORDER_NOTE',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderModified = 'ORDER_MODIFIED'
}

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int']['output'];
};

export type HistoryEntryListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<HistoryEntrySortParameter>;
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export enum LanguageCode {
  Af = 'af',
  Ak = 'ak',
  Sq = 'sq',
  Am = 'am',
  Ar = 'ar',
  Hy = 'hy',
  As = 'as',
  Az = 'az',
  Bm = 'bm',
  Bn = 'bn',
  Eu = 'eu',
  Be = 'be',
  Bs = 'bs',
  Br = 'br',
  Bg = 'bg',
  My = 'my',
  Ca = 'ca',
  Ce = 'ce',
  Zh = 'zh',
  ZhHans = 'zh_Hans',
  ZhHant = 'zh_Hant',
  Cu = 'cu',
  Kw = 'kw',
  Co = 'co',
  Hr = 'hr',
  Cs = 'cs',
  Da = 'da',
  Nl = 'nl',
  NlBe = 'nl_BE',
  Dz = 'dz',
  En = 'en',
  EnAu = 'en_AU',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnUs = 'en_US',
  Eo = 'eo',
  Et = 'et',
  Ee = 'ee',
  Fo = 'fo',
  Fi = 'fi',
  Fr = 'fr',
  FrCa = 'fr_CA',
  FrCh = 'fr_CH',
  Ff = 'ff',
  Gl = 'gl',
  Lg = 'lg',
  Ka = 'ka',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  El = 'el',
  Gu = 'gu',
  Ht = 'ht',
  Ha = 'ha',
  He = 'he',
  Hi = 'hi',
  Hu = 'hu',
  Is = 'is',
  Ig = 'ig',
  Id = 'id',
  Ia = 'ia',
  Ga = 'ga',
  It = 'it',
  Ja = 'ja',
  Jv = 'jv',
  Kl = 'kl',
  Kn = 'kn',
  Ks = 'ks',
  Kk = 'kk',
  Km = 'km',
  Ki = 'ki',
  Rw = 'rw',
  Ko = 'ko',
  Ku = 'ku',
  Ky = 'ky',
  Lo = 'lo',
  La = 'la',
  Lv = 'lv',
  Ln = 'ln',
  Lt = 'lt',
  Lu = 'lu',
  Lb = 'lb',
  Mk = 'mk',
  Mg = 'mg',
  Ms = 'ms',
  Ml = 'ml',
  Mt = 'mt',
  Gv = 'gv',
  Mi = 'mi',
  Mr = 'mr',
  Mn = 'mn',
  Ne = 'ne',
  Nd = 'nd',
  Se = 'se',
  Nb = 'nb',
  Nn = 'nn',
  Ny = 'ny',
  Or = 'or',
  Om = 'om',
  Os = 'os',
  Ps = 'ps',
  Fa = 'fa',
  FaAf = 'fa_AF',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_BR',
  PtPt = 'pt_PT',
  Pa = 'pa',
  Qu = 'qu',
  Ro = 'ro',
  RoMd = 'ro_MD',
  Rm = 'rm',
  Rn = 'rn',
  Ru = 'ru',
  Sm = 'sm',
  Sg = 'sg',
  Sa = 'sa',
  Gd = 'gd',
  Sr = 'sr',
  Sn = 'sn',
  Ii = 'ii',
  Sd = 'sd',
  Si = 'si',
  Sk = 'sk',
  Sl = 'sl',
  So = 'so',
  St = 'st',
  Es = 'es',
  EsEs = 'es_ES',
  EsMx = 'es_MX',
  Su = 'su',
  Sw = 'sw',
  SwCd = 'sw_CD',
  Sv = 'sv',
  Tg = 'tg',
  Ta = 'ta',
  Tt = 'tt',
  Te = 'te',
  Th = 'th',
  Bo = 'bo',
  Ti = 'ti',
  To = 'to',
  Tr = 'tr',
  Tk = 'tk',
  Uk = 'uk',
  Ur = 'ur',
  Ug = 'ug',
  Uz = 'uz',
  Vi = 'vi',
  Vo = 'vo',
  Cy = 'cy',
  Fy = 'fy',
  Wo = 'wo',
  Xh = 'xh',
  Yi = 'yi',
  Yo = 'yo',
  Zu = 'zu'
}

export enum OrderType {
  Regular = 'Regular',
  Seller = 'Seller',
  Aggregate = 'Aggregate'
}

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  type: OrderType;
  orderPlacedAt?: Maybe<Scalars['DateTime']['output']>;
  code: Scalars['String']['output'];
  state: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<OrderAddress>;
  billingAddress?: Maybe<OrderAddress>;
  lines: Array<OrderLine>;
  surcharges: Array<Surcharge>;
  discounts: Array<Discount>;
  couponCodes: Array<Scalars['String']['output']>;
  promotions: Array<Promotion>;
  payments?: Maybe<Array<Payment>>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  totalQuantity: Scalars['Int']['output'];
  subTotal: Scalars['Money']['output'];
  subTotalWithTax: Scalars['Money']['output'];
  currencyCode: CurrencyCode;
  shippingLines: Array<ShippingLine>;
  shipping: Scalars['Money']['output'];
  shippingWithTax: Scalars['Money']['output'];
  total: Scalars['Money']['output'];
  totalWithTax: Scalars['Money']['output'];
  taxSummary: Array<OrderTaxSummary>;
  history: HistoryEntryList;
  customFields?: Maybe<Scalars['JSON']['output']>;
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  description: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
  taxBase: Scalars['Money']['output'];
  taxTotal: Scalars['Money']['output'];
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  fullName?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  streetLine1?: Maybe<Scalars['String']['output']>;
  streetLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int']['output'];
};

export type ShippingLine = {
  __typename?: 'ShippingLine';
  id: Scalars['ID']['output'];
  shippingMethod: ShippingMethod;
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  discountedPrice: Scalars['Money']['output'];
  discountedPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
};

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String']['output'];
  type: AdjustmentType;
  description: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  amountWithTax: Scalars['Money']['output'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  productVariant: ProductVariant;
  featuredAsset?: Maybe<Asset>;
  unitPrice: Scalars['Money']['output'];
  unitPriceWithTax: Scalars['Money']['output'];
  unitPriceChangeSinceAdded: Scalars['Money']['output'];
  unitPriceWithTaxChangeSinceAdded: Scalars['Money']['output'];
  discountedUnitPrice: Scalars['Money']['output'];
  discountedUnitPriceWithTax: Scalars['Money']['output'];
  proratedUnitPrice: Scalars['Money']['output'];
  proratedUnitPriceWithTax: Scalars['Money']['output'];
  quantity: Scalars['Int']['output'];
  orderPlacedQuantity: Scalars['Int']['output'];
  taxRate: Scalars['Float']['output'];
  linePrice: Scalars['Money']['output'];
  linePriceWithTax: Scalars['Money']['output'];
  discountedLinePrice: Scalars['Money']['output'];
  discountedLinePriceWithTax: Scalars['Money']['output'];
  proratedLinePrice: Scalars['Money']['output'];
  proratedLinePriceWithTax: Scalars['Money']['output'];
  lineTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  taxLines: Array<TaxLine>;
  order: Order;
  fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type Payment = Node & {
  __typename?: 'Payment';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  method: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  refunds: Array<Refund>;
  metadata?: Maybe<Scalars['JSON']['output']>;
};

export type RefundLine = {
  __typename?: 'RefundLine';
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  refund: Refund;
  refundId: Scalars['ID']['output'];
};

export type Refund = Node & {
  __typename?: 'Refund';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  items: Scalars['Money']['output'];
  shipping: Scalars['Money']['output'];
  adjustment: Scalars['Money']['output'];
  total: Scalars['Money']['output'];
  method?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  lines: Array<RefundLine>;
  paymentId: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
};

export type FulfillmentLine = {
  __typename?: 'FulfillmentLine';
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  fulfillment: Fulfillment;
  fulfillmentId: Scalars['ID']['output'];
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  lines: Array<FulfillmentLine>;
  /** @deprecated Use the `lines` field instead */
  summary: Array<FulfillmentLine>;
  state: Scalars['String']['output'];
  method: Scalars['String']['output'];
  trackingCode?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  taxLines: Array<TaxLine>;
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  taxRate: Scalars['Float']['output'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  checker?: Maybe<ConfigurableOperation>;
  handler: ConfigurableOperation;
  translations: Array<PaymentMethodTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type PaymentMethodTranslation = {
  __typename?: 'PaymentMethodTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  groupId: Scalars['ID']['output'];
  group: ProductOptionGroup;
  translations: Array<ProductOptionTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  items: Array<SearchResult>;
  totalItems: Scalars['Int']['output'];
  facetValues: Array<FacetValueResult>;
  collections: Array<CollectionResult>;
};

export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  facetValue: FacetValue;
  count: Scalars['Int']['output'];
};

export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int']['output'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  id: Scalars['ID']['output'];
  preview: Scalars['String']['output'];
  focalPoint?: Maybe<Coordinate>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  productAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  currencyCode: CurrencyCode;
  description: Scalars['String']['output'];
  facetIds: Array<Scalars['ID']['output']>;
  facetValueIds: Array<Scalars['ID']['output']>;
  collectionIds: Array<Scalars['ID']['output']>;
  score: Scalars['Float']['output'];
};

export type SearchResultPrice = PriceRange | SinglePrice;

export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Money']['output'];
};

export type PriceRange = {
  __typename?: 'PriceRange';
  min: Scalars['Money']['output'];
  max: Scalars['Money']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  description: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  variants: Array<ProductVariant>;
  variantList: ProductVariantList;
  optionGroups: Array<ProductOptionGroup>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductTranslation>;
  collections: Array<Collection>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int']['output'];
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int']['output'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  id: Scalars['ID']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  sku: Scalars['String']['output'];
  name: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  price: Scalars['Money']['output'];
  currencyCode: CurrencyCode;
  priceWithTax: Scalars['Money']['output'];
  stockLevel: Scalars['String']['output'];
  taxRateApplied: TaxRate;
  taxCategory: TaxCategory;
  options: Array<ProductOption>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductVariantTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  couponCode?: Maybe<Scalars['String']['output']>;
  perCustomerUsageLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
  translations: Array<PromotionTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type PromotionTranslation = {
  __typename?: 'PromotionTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int']['output'];
};

export type Region = {
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  code: Scalars['String']['output'];
  type: Scalars['String']['output'];
  name: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
};

export type RegionTranslation = {
  __typename?: 'RegionTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type Country = Region & Node & {
  __typename?: 'Country';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  code: Scalars['String']['output'];
  type: Scalars['String']['output'];
  name: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int']['output'];
};

export type Province = Region & Node & {
  __typename?: 'Province';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  code: Scalars['String']['output'];
  type: Scalars['String']['output'];
  name: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type ProvinceList = PaginatedList & {
  __typename?: 'ProvinceList';
  items: Array<Province>;
  totalItems: Scalars['Int']['output'];
};

export type Role = Node & {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int']['output'];
};

export type Seller = Node & {
  __typename?: 'Seller';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fulfillmentHandlerCode: Scalars['String']['output'];
  checker: ConfigurableOperation;
  calculator: ConfigurableOperation;
  translations: Array<ShippingMethodTranslation>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int']['output'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int']['output'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  value: Scalars['Float']['output'];
  category: TaxCategory;
  zone: Zone;
  customerGroup?: Maybe<CustomerGroup>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int']['output'];
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  identifier: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
  roles: Array<Role>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  authenticationMethods: Array<AuthenticationMethod>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  strategy: Scalars['String']['output'];
};

export type Zone = Node & {
  __typename?: 'Zone';
  id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  members: Array<Region>;
  customFields?: Maybe<Scalars['JSON']['output']>;
};

export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  eligibilityCheckerMessage?: Maybe<Scalars['String']['output']>;
};

export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  validationErrorMessage: Scalars['String']['output'];
};

export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type RegisterCustomerInput = {
  emailAddress: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
};

export type PaymentInput = {
  method: Scalars['String']['input'];
  metadata: Scalars['JSON']['input'];
};

export type CollectionListOptions = {
  topLevelOnly?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CollectionSortParameter>;
  filter?: InputMaybe<CollectionFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type FacetListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<FacetSortParameter>;
  filter?: InputMaybe<FacetFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type OrderListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<OrderSortParameter>;
  filter?: InputMaybe<OrderFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type ProductListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductSortParameter>;
  filter?: InputMaybe<ProductFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type ProductVariantListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProductVariantSortParameter>;
  filter?: InputMaybe<ProductVariantFilterParameter>;
  filterOperator?: InputMaybe<LogicalOperator>;
};

export type AddPaymentToOrderResult = Order | OrderPaymentStateError | IneligiblePaymentMethodError | PaymentFailedError | PaymentDeclinedError | OrderStateTransitionError | NoActiveOrderError;

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type SetCustomerForOrderResult = Order | AlreadyLoggedInError | EmailAddressConflictError | NoActiveOrderError | GuestCheckoutError;

export type RegisterCustomerAccountResult = Success | MissingPasswordError | PasswordValidationError | NativeAuthStrategyError;

export type RefreshCustomerVerificationResult = Success | NativeAuthStrategyError;

export type VerifyCustomerAccountResult = CurrentUser | VerificationTokenInvalidError | VerificationTokenExpiredError | MissingPasswordError | PasswordValidationError | PasswordAlreadySetError | NativeAuthStrategyError;

export type UpdateCustomerPasswordResult = Success | InvalidCredentialsError | PasswordValidationError | NativeAuthStrategyError;

export type RequestUpdateCustomerEmailAddressResult = Success | InvalidCredentialsError | EmailAddressConflictError | NativeAuthStrategyError;

export type UpdateCustomerEmailAddressResult = Success | IdentifierChangeTokenInvalidError | IdentifierChangeTokenExpiredError | NativeAuthStrategyError;

export type RequestPasswordResetResult = Success | NativeAuthStrategyError;

export type ResetPasswordResult = CurrentUser | PasswordResetTokenInvalidError | PasswordResetTokenExpiredError | PasswordValidationError | NativeAuthStrategyError | NotVerifiedError;

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError | NativeAuthStrategyError;

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type ActiveOrderResult = Order | NoActiveOrderError;

export type ProductVariantFilterParameter = {
  id?: InputMaybe<IdOperators>;
  productId?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  sku?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  price?: InputMaybe<NumberOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
};

export type ProductVariantSortParameter = {
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
};

export type CustomerFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  title?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  emailAddress?: InputMaybe<StringOperators>;
};

export type CustomerSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
};

export type OrderFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  type?: InputMaybe<StringOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  code?: InputMaybe<StringOperators>;
  state?: InputMaybe<StringOperators>;
  active?: InputMaybe<BooleanOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
};

export type OrderSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
};

export type HistoryEntryFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  type?: InputMaybe<StringOperators>;
};

export type HistoryEntrySortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  description?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
};

export type CollectionSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
};

export type FacetFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  code?: InputMaybe<StringOperators>;
};

export type FacetSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
};

export type ProductFilterParameter = {
  id?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  description?: InputMaybe<StringOperators>;
};

export type ProductSortParameter = {
  id?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
};

export type NativeAuthInput = {
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
};
