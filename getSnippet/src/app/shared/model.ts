
export interface IRootObject {
  $schema: string
  version: number
  devMode: boolean
  maintenanceMode: boolean
  pageNotFoundRoute: string
  common: ICommon
  widgetRegistry: IWidgetRegistryItem[]
  errors: any[]
  $$customizations: I$$customizations
  theming: ITheming
  layouts: ILayoutsItem[]
  pages: IPagesItem[]
}
export interface ICommon {
  titleFormat: string
  locale: ILocale
  routes: IRoutes
  pageNotFoundRoute: string
  documentTitle: string
}
export interface ILocale {
  localeId: string
  currency: ICurrency
  date: IDate
}
export interface ICurrency {
  code: string
  display: string
  digitsInfo: string
  abbreviation: string
}
export interface IDate {
  parse: IParse
  display: IDisplay
}
export interface IParse {
  dateInput: string
}
export interface IDisplay {
  dateInput: string
}
export interface IRoutes {
  active: string[]
}
export interface IWidgetRegistryItem {
  widgetId: string
  libraryName: string
  moduleName: string
}
export interface I$$customizations {}
export interface ITheming {
  properties: IProperties
}
export interface IProperties {
  tooltip: string
  "completed-stepper": string
  "active-stepper": string
  "link-color": string
  "form-field-hint-padding": string
  "font-regular": string
}
export interface ILayoutsItem {
  id: string
  header: IHeader
  footer: IFooter
}
export interface IHeader {
  style: IStyle
  container: IContainer
  contents: IContentsItem[]
}
export interface IStyle {
  height?: string
  "border-bottom"?: string
  "max-width"?: string
  gap?: string
  "justify-content"?: string
  width?: string
  "font-size"?: string
  "align-self"?: string
  "line-height"?: string
  "font-weight"?: string
  "font-family"?: string
  "min-height"?: string
  bottom?: number
  position?: string
  padding?: string
  "box-sizing"?: string
  margin?: string
  "text-align"?: string
  "letter-spacing"?: string
  "text-underline-position"?: string
  "text-decoration-skip-ink"?: string
  color?: string
  "margin-bottom"?: string
  "text-decoration"?: string
  "background-color"?: string
  "border-radius"?: string
  backgroundColor?: string
  top?: string
  "margin-left"?: string
  "margin-right"?: string
  "align-items"?: string
  transform?: string
  border?: string
  "margin-top"?: string
  widget?: string
  "padding-left"?: string
  flex?: string | number
  "box-shadow"?: string
  "padding-top"?: string
  background?: string
  "text-transform"?: string
  "min-width"?: string
  "font-style"?: string
  "background-size"?: string
  display?: string
  "padding-bottom"?: string
  "font-color"?: string
  left?: string
}
export interface IContainer {
  layout?: string
  style?: IStyle
  responsiveStyle?: IResponsiveStyle
  cssClass?: string
  id?: string
  visibilityObserver?: IVisibilityObserver
  "align-items"?: string
}
export interface IContentsItem {
  type: string
  content?: string | IContent
  style?: IStyle
  aria?: IAria
  hideWhen?: IHideWhen
  container?: IContainer
  contents?: IContentsItem[]
  responsiveStyle?: IResponsiveStyle
  links?: ILinksItem[]
  transformation?: ITransformation
  command?: ICommand
  cssClass?: string
  automationId?: string
  textType?: string
  stateKeys?: string[]
}
export interface IAria {
  ariaLabel: string
}
export interface IHideWhen {
  field?: string
  operator?: string
  values?: string[] | boolean[]
  booleanOperator?: string
  rules?: IRulesItem[]
}
export interface IFooter {
  style: IStyle
  responsiveStyle: IResponsiveStyle
  container: IContainer
  contents: IContentsItem[]
}
export interface IResponsiveStyle {
  breakpoints: IBreakpoints
  gap?: string
  "background-color"?: string
  border?: string
  padding?: string
  "border-radius"?: string
  "text-align"?: string
  "margin-bottom"?: string
}
export interface IBreakpoints {
  xl?: IXl
  sm?: ISm
  md?: IMd
}
export interface IXl {
  "background-color"?: string
  "justify-content"?: string
  flex?: string
  "margin-bottom"?: string
  "margin-left"?: string
  width?: string
  "text-align"?: string
  "background-repeat"?: string
  "background-size"?: string
  "background-image"?: string
  "padding-top"?: string
  "background-position"?: string
  margin?: string
  "max-width"?: string
  display?: string
  "margin-top"?: string
  padding?: string
  "font-size"?: string
  "line-height"?: string
  "padding-left"?: string
  "border-top-left-radius"?: string
  "border-top-right-radius"?: string
  "border-bottom-left-radius"?: string
  "border-bottom-right-radius"?: string
  "margin-right"?: string
  order?: number
  "padding-right"?: string
}
export interface ISm {
  "background-color"?: string
  "justify-content"?: string
  "flex-wrap"?: string
  flex?: string
  "margin-bottom"?: string
  width?: string
  "text-align"?: string
  "margin-left"?: string
  "margin-right"?: string
  padding?: string
  background?: string
  height?: string
  gap?: string
  "margin-top"?: string
  "box-shadow"?: string
  "border-radius"?: string
  display?: string
  "font-size"?: string
  "line-height"?: string
  "padding-left"?: string
  "border-top-left-radius"?: string
  "border-top-right-radius"?: string
  "border-bottom-left-radius"?: string
  "border-bottom-right-radius"?: string
  order?: number
  "padding-right"?: string
}
export interface ILinksItem {
  content: string
  style: IStyle
  hideWhen?: IHideWhen
  command: ICommand
}
export interface ICommand {
  commandName: string
  parameter: IParameter
  useState?: IUseState
  chain?: IChain
}
export interface IParameter {
  routeOrFunction?: string
  type?: string
  target?: string
  modalConfig?: IModalConfig
  rule?: IRule
  stateKey?: string
  updateMode?: string
  state?: IState
  key?: string
  transformation?: ITransformation
  id?: string
  event?: IEvent
  dobMinAge?: string
  dobMaxAge?: string
  fromProperty?: string
  fragment?: string
}
export interface ITransformation {
  fieldMapping: IFieldMappingItem[]
}
export interface IFieldMappingItem {
  sourcePath: string
  targetPath: string
  mappingType: string
}
export interface IModalConfig {
  key: string
  container: IContainer
  style: IStyle
  contents: IContentsItem[]
  hideCloseButton?: boolean
  closeCommand?: ICloseCommand
}
export interface IContent {
  widget: IWidget
}
export interface IWidget {
  name: string
  context: IContext
}
export interface IContext {
  pdfSource?: string
  pdfStyle?: string
  style?: IStyle
  responsiveStyle?: IResponsiveStyle
  container?: IContainer
  contents?: IContentsItem[] | IContents
  formId?: string
  fields?: IFieldsItem[]
  class?: string
}
export interface IPagesItem {
  id: string
  name: string
  title: string
  styleSheet: string
  route: string
  layout: ILayout
  style?: IStyle
  sections: ISectionsItem[]
  conditions?: any[]
  lifecycleCommands?: ILifecycleCommands
}
export interface ILayout {
  id: string
}
export interface ISectionsItem {
  id: string
  size: number
  content: IContentItem[]
}
export interface IContentItem {
  size: number
  widget: IWidget
}
export interface IMd {
  padding?: string
  background?: string
  height?: string
  flex?: string
  gap?: string
  "text-align"?: string
  "margin-top"?: string
  "margin-bottom"?: string
  "background-color"?: string
  "box-shadow"?: string
  "border-radius"?: string
  margin?: string
  display?: string
  "padding-top"?: string
}
export interface IRulesItem {
  field: string
  operator: string
  values?: boolean[] | string[]
}
export interface IUseState {
  currentState?: string
  formValuesValid?: string
  prePopulatePayoutNo?: string
  scratchPad?: string
  formValues?: string
  payoutMobileNumber?: string
  appVariables?: string
  payoutForm?: string
}
export interface IRule {
  booleanOperator: string
  rules: IRulesItem[]
}
export interface IChain {
  success: ISuccess
  failure?: IFailure
}
export interface ISuccess {
  commandName: string
  parameter?: IParameter
  useState?: IUseState
  chain?: IChain
}
export interface IState {
  benifitsEligibiltyHide?: boolean
  isVisible?: boolean
  prePopulatePayoutNo?: boolean
  sales?: ISales
}
export interface IFailure {
  commandName: string
  parameter: IParameter
  useState?: IUseState
  chain?: IChain
}
export interface IFieldsItem {
  template?: string
  props?: IProps
  type?: string
  className?: string
  validation?: IValidation
  key?: string
  validators?: IValidators
  extensionOptions?: IExtensionOptions
  fieldGroupClassName?: string
  fieldGroup?: IFieldGroupItem[]
}
export interface IProps {
  safeHtml?: boolean
  label?: string
  description?: string
  onlyAllow?: string
  minLength?: number
  maxLength?: number
  required?: boolean
  hideRequiredMarker?: boolean
  tooltip?: ITooltip
  displayProp?: string
  selectOnInputMatch?: boolean
  min?: number
  max?: number
  options?: IOptionsItem[]
  datepickerOptions?: IDatepickerOptions
  pattern?: string
  dateFormat?: string
  valueProp?: string
  floatLabel?: string
  defaultCountry?: string
  changeExpressions?: IChangeExpressions
  hideLabel?: string
}
export interface ITooltip {
  modalConfig: IModalConfig
}
export interface ICloseCommand {}
export interface IValidation {
  messages: IMessages
}
export interface IMessages {
  required: string
  minlength?: string
  maxlength?: string
  noMatch?: string
  min?: string
  max?: string
  dateRange?: string
  pattern?: string
  matDatepickerMax?: string
  matDatepickerMin?: string
  sgId?: string
  sgFinId?: string
  invalidPhoneNumberPrefix?: string
  invalidPhoneNumberLength?: string
  invalid?: string
  regex?: string
}
export interface IOptionsItem {
  label: string
  group?: IGroupItem[]
  value?: string
  allowedCountriesName?: string[]
}
export interface IGroupItem {
  label: string
  value: string
}
export interface IValidators {
  validation: string[] | IValidationItem[]
}
export interface IExtensionOptions {
  prePopulate: IPrePopulateItem[]
}
export interface IPrePopulateItem {
  type: string
  config: IConfig
  parameter?: IParameter
}
export interface IConfig {
  command?: ICommand
  operations?: IOperationsItem[]
  transformationNameOrConfig?: ITransformationNameOrConfig
  sessionId?: string
  resetTimerOnEvents?: boolean
  removeActiveSessions?: string[]
  expiryTimeInSeconds?: number
  expiryCommand?: IExpiryCommand
}
export interface IDatepickerOptions {
  pickerIcon?: string
  showCalenderOnInputClick?: boolean
  typeable?: boolean
  hideDatePicker?: string
}
export interface IValidationItem {
  name: string
  options: IOptions
}
export interface IOptions {
  dateRange: IDateRange
  regex?: string
}
export interface IDateRange {
  days: number
}
export interface IVisibilityObserver {
  start: IStart
}
export interface IStart {
  id: string
  saveToState: boolean
  observeOnce: boolean
}
export interface IEvent {
  type: string
  config: IConfig
}
export interface IContents {
  id: string
  tabs?: ITabsItem[]
  steps?: IStepsItem[]
}
export interface ITabsItem {
  tab: string
  id: string
  order: number
  style: IStyle
  command: ICommand
  cssClassConfig: ICssClassConfigItem[]
}
export interface ICssClassConfigItem {
  style: IStyle
  revertStyle: IRevertStyle
  rules: IRules
}
export interface IRevertStyle {
  "background-color": string
  color: string
  "font-weight": string
  "border-bottom": string
}
export interface IRules {
  booleanOperator?: string
  rules?: IRulesItem[]
  field?: string
  operator?: string
  values?: boolean[]
}
export interface IStepsItem {
  step?: string
  id?: string
  order?: number
  completed?: boolean
}
export interface IFieldGroupItem {
  type?: string
  className?: string
  props?: IProps
  validation?: IValidation
  key?: string
  fieldGroupClassName?: string
  fieldGroup?: IFieldGroupItem[]
  extensionOptions?: IExtensionOptions
  validators?: IValidators
  hideExpression?: string
  defaultValue?: string
}
export interface IChangeExpressions {
  change: IChange
}
export interface IChange {
  command: ICommand
}
export interface IOperationsItem {
  type: string
  config: IConfig
}
export interface ITransformationNameOrConfig {
  useState: IUseState
  name: string
  fieldMapping: IFieldMappingItem[]
}
export interface ISales {
  stepper: IStepper
}
export interface IStepper {
  steps: IStepsItem[]
  currentStep: string
}
export interface ILifecycleCommands {
  afterPageLoad: IAfterPageLoadItem[]
}
export interface IAfterPageLoadItem {
  commandName: string
  parameter: IParameter
}
export interface IExpiryCommand {
  commandName: string
  parameter: IParameter
}
export function match(modelRegex: RegExp) {
  throw new Error('Function not implemented.')
}

