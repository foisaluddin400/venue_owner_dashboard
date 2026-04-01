import { baseApi } from "./baseApi";

const product = baseApi.injectEndpoints({
  endpoints: (builder) => ({



    getCategoryAll: builder.query({
      query: () => {
        return {
          url: `/category/all-categories`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/category/create-category",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
     deleteCategory :  builder.mutation({
        query : (id)=>{
            return {
                url : `/category/delete-category/${id}`,
                method : 'DELETE'
            }
        },
        invalidatesTags :['updateProfile']
    }),


    updateCategory: builder.mutation({
      query: ({id,data}) => {
        return {
          url: `/category/update-category/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    
   
  }),
});

export const {
  useAddCategoryMutation,useDeleteCategoryMutation,useGetCategoryAllQuery,useUpdateCategoryMutation
  

} = product;