import { reactive } from "vue";

export const store = reactive({
  posts: [
    {
      id: 1,
      date: "June 2020, 13",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
      image: "/Paesaggio.jpg"
    },
    {
      id: 2,
      date: "June 2020, 13",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
      image: "/AiKnight.jpg"
    },
    {
      id: 3,
      date: "June 2020, 13",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
      image: "/Field.jpg"
    }
  ]
})