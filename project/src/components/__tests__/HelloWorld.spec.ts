import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../hello-world.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello AEMO" } });
    expect(wrapper.text()).toContain("Hello AEMO");
  });
});
