import { Construct } from "constructs";
import { ISimulatorResource } from "./resource";
import { BaseResourceSchema } from "./schema";
import { CounterSchema } from "./schema-resources";
import { bindSimulatorResource, makeSimulatorJsClient } from "./util";
import * as cloud from "../cloud";
import * as core from "../core";

/**
 * Simulator implementation of `cloud.Counter`.
 *
 * @inflight `@winglang/sdk.cloud.ICounterClient`
 */
export class Counter extends cloud.CounterBase implements ISimulatorResource {
  public readonly initial: number;
  constructor(scope: Construct, id: string, props: cloud.CounterProps = {}) {
    super(scope, id, props);

    this.initial = props.initial ?? 0;

    this.inflights.add("inc");
    this.inflights.add("dec");
    this.inflights.add("peek");
  }

  public toSimulator(): BaseResourceSchema {
    const schema: CounterSchema = {
      type: cloud.COUNTER_TYPE,
      path: this.node.path,
      props: {
        initial: this.initial,
      },
      attrs: {} as any,
    };
    return schema;
  }

  /** @internal */
  public _bind(host: core.Resource, ops: string[]): void {
    bindSimulatorResource("counter", this, host);
    super._bind(host, ops);
  }

  /** @internal */
  public _toInflight(): core.Code {
    return makeSimulatorJsClient("counter", this);
  }
}
