import { mount } from "@vue/test-utils"
import Header from "@/components/Header.vue"
import store from "./../../src/store"

describe("Header.vue", () => {
    it("checks logo label", () => {
        const wrapper = mount(Header, {
            global: {
                plugins: [store],
            },
        })

        expect(wrapper.get("[data-test=header-logo]").text()).toBe("Vue News")
    })
})
