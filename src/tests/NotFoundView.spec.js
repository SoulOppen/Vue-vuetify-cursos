import { mount } from "@vue/test-utils";
import NotFoundView from "@/views/NotFoundView.vue";

describe("NotFoundView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NotFoundView);
  });
  it("renders correctly", () => {
    expect(wrapper.text()).toContain("Not Found");
    expect(wrapper.text()).toContain("Regresa al home");
  });
});
