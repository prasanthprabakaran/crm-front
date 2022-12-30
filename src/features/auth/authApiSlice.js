import { apiSlice } from "../../app/api/apiSlice";
import { logOut,setCredentials } from "./authSlice";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                    setTimeout(()=>{
                        dispatch(apiSlice.util.resetApiState())
                    },1000)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    // console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                } catch (err) {
                    console.log(err)
                }
            }
        }),

    })

})

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice

// register: builder.mutation({
//     query: (obj) => ({
//         url: "auth/register",
//         method: "POST",
//         body: obj,
//     }),
//     invalidatesTags:["register"],
// }),
// forgetPassword: builder.mutation({
//     query:(obj) => ({
//         url: "forgetpassword",
//         method: "POST",
//         body: { email: obj.email },
//     }),
//     invalidatesTags: ["forgetpassword"],
// }),
// resetPassword: builder.mutation({
//     query: (pass) => ({
//         url: `resetPassword/${pass.token}`,
//         method: "POST",
//         body: { password: pass.password},
//     }),
//     invalidatesTags: ["resetPassword"],
// }),
