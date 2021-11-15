import { mount } from "@vue/test-utils"
import Footer from "@/components/Footer.vue"

describe("Footer.vue", () => {
    it("checks text content of logo, copyright and sections labels", () => {
        const wrapper = mount(Footer)
        const copyrightText = "© Copyright 2000-2021 Jumia News."

        expect(wrapper.get("[data-test=footer-logo]").text()).toBe("Jumia News")
        expect(wrapper.get("[data-test=copyright]").text()).toBe(copyrightText)

        expect(wrapper.get("[data-test=section-top-viewed]").text()).toBe("Top Viewed")
        expect(wrapper.get("[data-test=section-us]").text()).toBe("United States")
        expect(wrapper.get("[data-test=section-arts]").text()).toBe("Arts")
        expect(wrapper.get("[data-test=section-world]").text()).toBe("World")
        expect(wrapper.get("[data-test=section-science]").text()).toBe("Science")
    })
})
