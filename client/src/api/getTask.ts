import baseApi from './baseApi'

export const getTasks = (page: number, ) => baseApi({
  url: "/tasks/get",
  method: "GET",
  params: {
    page
  }
})