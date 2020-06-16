import React from "react"
import { mount, shallow } from "enzyme";
import Start from "./Start"
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("start page", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Start />)
  })
  test("should render project name", () => {
    // console.log(wrapper.debug())
    expect(wrapper.find("p").text()).toContain("Project X - NBA Comparison App")
  })
  test("should render search button with correct text", () => {
        console.log(wrapper.find("button").debug())

    // expect(wrapper.find("button").text()).toContain("Search")
  })
  test("should render for with correct placeholder text", () => {
    expect(wrapper.find("#player-search").props().placeholder).toEqual("Player 1 (Lebron James)")
  })
})