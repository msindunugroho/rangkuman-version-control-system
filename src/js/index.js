import { anchorCreator } from "./components/anchorCreator.js";
import { dropdownList } from "./components/dropdownList.js";
import { navEventStyle } from "./components/navigation.js";
import { ordered_list } from "./components/ordered_list.js";

document.addEventListener('DOMContentLoaded', () => {
navEventStyle()
ordered_list()
anchorCreator()
dropdownList()
})