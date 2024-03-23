// @generated by protoc-gen-connect-es v1.2.0 with parameter "target=ts"
// @generated from file v1/authentication.proto (package v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoginRequest, LoginResponse } from "./authentication_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { StringValue } from "../types/value_pb.js";

/**
 * @generated from service v1.Authentication
 */
export const Authentication = {
  typeName: "v1.Authentication",
  methods: {
    /**
     * @generated from rpc v1.Authentication.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc v1.Authentication.HashPassword
     */
    hashPassword: {
      name: "HashPassword",
      I: StringValue,
      O: StringValue,
      kind: MethodKind.Unary,
    },
  }
} as const;

