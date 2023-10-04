import baseApi from './baseApi'

export const deleteTask = (id: string) => baseApi({
  url: `/tasks/delete/${id}`,
  method: "DELETE",
})