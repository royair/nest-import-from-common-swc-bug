export enum ARTIFACT_TYPE {
  SW22 = "SW22",
  CATIA22 = "CATIA22",
  AUTOCAD = "AUTOCAD",
}

export enum ARTIFACT_STATUSES {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum DESCRIPTOR_CATEGORIES {
  TITLE_BLOCK = "TITLE_BLOCK",
  BALLOONS = "BALLOONS",
  DIMENSIONS_AND_TOLERANCES = "DIMENSIONS_AND_TOLERANCES",
  TABLES = "TABLES",
}

export enum DESCRIPTOR_SOURCE {
  CAD = "CAD",
  CV = "CV",
  ANNO = "ANNO",
  CUSTOMER = "CUSTOMER",
}

export enum COMPARISON_STATUSES {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum COMPARISON_TYPE {
  FULL = "FULL",
  LIGHT = "LIGHT",
}

export enum OBSERVATION_TYPES {
  INSERTED = "INSERTED",
  MODIFIED = "MODIFIED",
  DELETED = "DELETED",
}

export enum ROLES {
  ADMIN = "ADMIN",
  VIEWER = "VIEWER",
  VALIDATOR = "VALIDATOR",
}

export enum AGENT {
  ALGO = "ALGO",
  HUMAN = "HUMAN",
}

export enum SORT {
  ASC = "ASC",
  DESC = "DESC",
}