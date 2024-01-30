// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file v1/config.proto (package v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Config is the top level config object for restic UI.
 *
 * @generated from message v1.Config
 */
export class Config extends Message<Config> {
  /**
   * modification number, used for read-modify-write consistency in the UI. Incremented on every write.
   *
   * @generated from field: int32 modno = 1;
   */
  modno = 0;

  /**
   * override the hostname tagged on backups. If provided it will be used in addition to tags to group backups.
   *
   * @generated from field: string host = 2;
   */
  host = "";

  /**
   * @generated from field: repeated v1.Repo repos = 3;
   */
  repos: Repo[] = [];

  /**
   * @generated from field: repeated v1.Plan plans = 4;
   */
  plans: Plan[] = [];

  /**
   * @generated from field: v1.Auth auth = 5;
   */
  auth?: Auth;

  constructor(data?: PartialMessage<Config>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Config";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "modno", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "repos", kind: "message", T: Repo, repeated: true },
    { no: 4, name: "plans", kind: "message", T: Plan, repeated: true },
    { no: 5, name: "auth", kind: "message", T: Auth },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config {
    return new Config().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJsonString(jsonString, options);
  }

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean {
    return proto3.util.equals(Config, a, b);
  }
}

/**
 * @generated from message v1.Repo
 */
export class Repo extends Message<Repo> {
  /**
   * unique but human readable ID for this repo.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * restic repo URI
   *
   * @generated from field: string uri = 2;
   */
  uri = "";

  /**
   * plaintext password
   *
   * @generated from field: string password = 3;
   */
  password = "";

  /**
   * extra environment variables to set for restic.
   *
   * @generated from field: repeated string env = 4;
   */
  env: string[] = [];

  /**
   * extra flags set on the restic command.
   *
   * @generated from field: repeated string flags = 5;
   */
  flags: string[] = [];

  /**
   * policy for when to run prune.
   *
   * @generated from field: v1.PrunePolicy prune_policy = 6;
   */
  prunePolicy?: PrunePolicy;

  /**
   * hooks to run on events for this repo.
   *
   * @generated from field: repeated v1.Hook hooks = 7;
   */
  hooks: Hook[] = [];

  constructor(data?: PartialMessage<Repo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Repo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "env", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "flags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "prune_policy", kind: "message", T: PrunePolicy },
    { no: 7, name: "hooks", kind: "message", T: Hook, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Repo {
    return new Repo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Repo {
    return new Repo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Repo {
    return new Repo().fromJsonString(jsonString, options);
  }

  static equals(a: Repo | PlainMessage<Repo> | undefined, b: Repo | PlainMessage<Repo> | undefined): boolean {
    return proto3.util.equals(Repo, a, b);
  }
}

/**
 * @generated from message v1.Plan
 */
export class Plan extends Message<Plan> {
  /**
   * unique but human readable ID for this plan.
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * ID of the repo to use.
   *
   * @generated from field: string repo = 2;
   */
  repo = "";

  /**
   * paths to include in the backup.
   *
   * @generated from field: repeated string paths = 4;
   */
  paths: string[] = [];

  /**
   * glob patterns to exclude.
   *
   * @generated from field: repeated string excludes = 5;
   */
  excludes: string[] = [];

  /**
   * cron expression describing the backup schedule.
   *
   * @generated from field: string cron = 6;
   */
  cron = "";

  /**
   * retention policy for snapshots.
   *
   * @generated from field: v1.RetentionPolicy retention = 7;
   */
  retention?: RetentionPolicy;

  /**
   * hooks to run on events for this plan.
   *
   * @generated from field: repeated v1.Hook hooks = 8;
   */
  hooks: Hook[] = [];

  constructor(data?: PartialMessage<Plan>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Plan";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "paths", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "excludes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "cron", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "retention", kind: "message", T: RetentionPolicy },
    { no: 8, name: "hooks", kind: "message", T: Hook, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plan {
    return new Plan().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plan {
    return new Plan().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plan {
    return new Plan().fromJsonString(jsonString, options);
  }

  static equals(a: Plan | PlainMessage<Plan> | undefined, b: Plan | PlainMessage<Plan> | undefined): boolean {
    return proto3.util.equals(Plan, a, b);
  }
}

/**
 * @generated from message v1.RetentionPolicy
 */
export class RetentionPolicy extends Message<RetentionPolicy> {
  /**
   * max_unused_limit is used to decide when forget should be run.
   *
   * e.g. a percentage i.e. 25% or a number of megabytes.
   *
   * @generated from field: string max_unused_limit = 1;
   */
  maxUnusedLimit = "";

  /**
   * keep the last n snapshots.
   *
   * @generated from field: int32 keep_last_n = 2;
   */
  keepLastN = 0;

  /**
   * keep the last n hourly snapshots.
   *
   * @generated from field: int32 keep_hourly = 3;
   */
  keepHourly = 0;

  /**
   * keep the last n daily snapshots.
   *
   * @generated from field: int32 keep_daily = 4;
   */
  keepDaily = 0;

  /**
   * keep the last n weekly snapshots.
   *
   * @generated from field: int32 keep_weekly = 5;
   */
  keepWeekly = 0;

  /**
   * keep the last n monthly snapshots.
   *
   * @generated from field: int32 keep_monthly = 6;
   */
  keepMonthly = 0;

  /**
   * keep the last n yearly snapshots.
   *
   * @generated from field: int32 keep_yearly = 7;
   */
  keepYearly = 0;

  /**
   * keep snapshots within a duration e.g. 1y2m3d4h5m6s
   *
   * @generated from field: string keep_within_duration = 8;
   */
  keepWithinDuration = "";

  constructor(data?: PartialMessage<RetentionPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.RetentionPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_unused_limit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "keep_last_n", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "keep_hourly", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "keep_daily", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "keep_weekly", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "keep_monthly", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "keep_yearly", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "keep_within_duration", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RetentionPolicy {
    return new RetentionPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RetentionPolicy {
    return new RetentionPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RetentionPolicy {
    return new RetentionPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: RetentionPolicy | PlainMessage<RetentionPolicy> | undefined, b: RetentionPolicy | PlainMessage<RetentionPolicy> | undefined): boolean {
    return proto3.util.equals(RetentionPolicy, a, b);
  }
}

/**
 * @generated from message v1.PrunePolicy
 */
export class PrunePolicy extends Message<PrunePolicy> {
  /**
   * max frequency of prune runs in days. If 0, prune will be run on every backup.
   *
   * @generated from field: int32 max_frequency_days = 1;
   */
  maxFrequencyDays = 0;

  /**
   * max percentage of repo size that can be unused before prune is run.
   *
   * @generated from field: int32 max_unused_percent = 100;
   */
  maxUnusedPercent = 0;

  /**
   * max number of bytes that can be unused before prune is run.
   *
   * @generated from field: int32 max_unused_bytes = 101;
   */
  maxUnusedBytes = 0;

  constructor(data?: PartialMessage<PrunePolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.PrunePolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_frequency_days", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 100, name: "max_unused_percent", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 101, name: "max_unused_bytes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrunePolicy {
    return new PrunePolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrunePolicy {
    return new PrunePolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrunePolicy {
    return new PrunePolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PrunePolicy | PlainMessage<PrunePolicy> | undefined, b: PrunePolicy | PlainMessage<PrunePolicy> | undefined): boolean {
    return proto3.util.equals(PrunePolicy, a, b);
  }
}

/**
 * @generated from message v1.Hook
 */
export class Hook extends Message<Hook> {
  /**
   * @generated from field: repeated v1.Hook.Condition conditions = 1;
   */
  conditions: Hook_Condition[] = [];

  /**
   * @generated from oneof v1.Hook.action
   */
  action: {
    /**
     * @generated from field: v1.Hook.Command action_command = 100;
     */
    value: Hook_Command;
    case: "actionCommand";
  } | {
    /**
     * @generated from field: v1.Hook.Webhook action_webhook = 101;
     */
    value: Hook_Webhook;
    case: "actionWebhook";
  } | {
    /**
     * @generated from field: v1.Hook.Discord action_discord = 102;
     */
    value: Hook_Discord;
    case: "actionDiscord";
  } | {
    /**
     * @generated from field: v1.Hook.Gotify action_gotify = 103;
     */
    value: Hook_Gotify;
    case: "actionGotify";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Hook>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Hook";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conditions", kind: "enum", T: proto3.getEnumType(Hook_Condition), repeated: true },
    { no: 100, name: "action_command", kind: "message", T: Hook_Command, oneof: "action" },
    { no: 101, name: "action_webhook", kind: "message", T: Hook_Webhook, oneof: "action" },
    { no: 102, name: "action_discord", kind: "message", T: Hook_Discord, oneof: "action" },
    { no: 103, name: "action_gotify", kind: "message", T: Hook_Gotify, oneof: "action" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook {
    return new Hook().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook {
    return new Hook().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook {
    return new Hook().fromJsonString(jsonString, options);
  }

  static equals(a: Hook | PlainMessage<Hook> | undefined, b: Hook | PlainMessage<Hook> | undefined): boolean {
    return proto3.util.equals(Hook, a, b);
  }
}

/**
 * @generated from enum v1.Hook.Condition
 */
export enum Hook_Condition {
  /**
   * @generated from enum value: CONDITION_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * error running any operation.
   *
   * @generated from enum value: CONDITION_ANY_ERROR = 1;
   */
  ANY_ERROR = 1,

  /**
   * backup started.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_START = 2;
   */
  SNAPSHOT_START = 2,

  /**
   * backup completed (success or fail).
   *
   * @generated from enum value: CONDITION_SNAPSHOT_END = 3;
   */
  SNAPSHOT_END = 3,

  /**
   * snapshot failed.
   *
   * @generated from enum value: CONDITION_SNAPSHOT_ERROR = 4;
   */
  SNAPSHOT_ERROR = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Hook_Condition)
proto3.util.setEnumType(Hook_Condition, "v1.Hook.Condition", [
  { no: 0, name: "CONDITION_UNKNOWN" },
  { no: 1, name: "CONDITION_ANY_ERROR" },
  { no: 2, name: "CONDITION_SNAPSHOT_START" },
  { no: 3, name: "CONDITION_SNAPSHOT_END" },
  { no: 4, name: "CONDITION_SNAPSHOT_ERROR" },
]);

/**
 * @generated from message v1.Hook.Command
 */
export class Hook_Command extends Message<Hook_Command> {
  /**
   * @generated from field: string command = 1;
   */
  command = "";

  constructor(data?: PartialMessage<Hook_Command>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Hook.Command";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "command", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook_Command {
    return new Hook_Command().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook_Command {
    return new Hook_Command().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook_Command {
    return new Hook_Command().fromJsonString(jsonString, options);
  }

  static equals(a: Hook_Command | PlainMessage<Hook_Command> | undefined, b: Hook_Command | PlainMessage<Hook_Command> | undefined): boolean {
    return proto3.util.equals(Hook_Command, a, b);
  }
}

/**
 * @generated from message v1.Hook.Webhook
 */
export class Hook_Webhook extends Message<Hook_Webhook> {
  /**
   * @generated from field: string webhook_url = 1;
   */
  webhookUrl = "";

  constructor(data?: PartialMessage<Hook_Webhook>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Hook.Webhook";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "webhook_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook_Webhook {
    return new Hook_Webhook().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook_Webhook {
    return new Hook_Webhook().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook_Webhook {
    return new Hook_Webhook().fromJsonString(jsonString, options);
  }

  static equals(a: Hook_Webhook | PlainMessage<Hook_Webhook> | undefined, b: Hook_Webhook | PlainMessage<Hook_Webhook> | undefined): boolean {
    return proto3.util.equals(Hook_Webhook, a, b);
  }
}

/**
 * @generated from message v1.Hook.Discord
 */
export class Hook_Discord extends Message<Hook_Discord> {
  /**
   * @generated from field: string webhook_url = 1;
   */
  webhookUrl = "";

  /**
   * template for the webhook payload.
   *
   * @generated from field: string template = 2;
   */
  template = "";

  constructor(data?: PartialMessage<Hook_Discord>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Hook.Discord";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "webhook_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook_Discord {
    return new Hook_Discord().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook_Discord {
    return new Hook_Discord().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook_Discord {
    return new Hook_Discord().fromJsonString(jsonString, options);
  }

  static equals(a: Hook_Discord | PlainMessage<Hook_Discord> | undefined, b: Hook_Discord | PlainMessage<Hook_Discord> | undefined): boolean {
    return proto3.util.equals(Hook_Discord, a, b);
  }
}

/**
 * @generated from message v1.Hook.Gotify
 */
export class Hook_Gotify extends Message<Hook_Gotify> {
  /**
   * @generated from field: string base_url = 1;
   */
  baseUrl = "";

  /**
   * @generated from field: string token = 3;
   */
  token = "";

  /**
   * template for the webhook payload.
   *
   * @generated from field: string template = 100;
   */
  template = "";

  /**
   * template for the webhook title.
   *
   * @generated from field: string title_template = 101;
   */
  titleTemplate = "";

  constructor(data?: PartialMessage<Hook_Gotify>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Hook.Gotify";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 101, name: "title_template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook_Gotify {
    return new Hook_Gotify().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook_Gotify {
    return new Hook_Gotify().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook_Gotify {
    return new Hook_Gotify().fromJsonString(jsonString, options);
  }

  static equals(a: Hook_Gotify | PlainMessage<Hook_Gotify> | undefined, b: Hook_Gotify | PlainMessage<Hook_Gotify> | undefined): boolean {
    return proto3.util.equals(Hook_Gotify, a, b);
  }
}

/**
 * @generated from message v1.Auth
 */
export class Auth extends Message<Auth> {
  /**
   * users to allow access to the UI.
   *
   * @generated from field: repeated v1.User users = 2;
   */
  users: User[] = [];

  constructor(data?: PartialMessage<Auth>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Auth";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "users", kind: "message", T: User, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auth {
    return new Auth().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auth {
    return new Auth().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auth {
    return new Auth().fromJsonString(jsonString, options);
  }

  static equals(a: Auth | PlainMessage<Auth> | undefined, b: Auth | PlainMessage<Auth> | undefined): boolean {
    return proto3.util.equals(Auth, a, b);
  }
}

/**
 * @generated from message v1.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from oneof v1.User.password
   */
  password: {
    /**
     * @generated from field: string password_bcrypt = 2;
     */
    value: string;
    case: "passwordBcrypt";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password_bcrypt", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "password" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

