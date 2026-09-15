import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { fetchuser } from '@/actions/useractions'

export async function generateMetadata({ params }) {
  const { username } = await params
  const user = await fetchuser(username)

  const title = user?.name
    ? `Support ${user.name} | Get Me A Coffee`
    : `Support ${username} | Get Me A Coffee`

  const description = user?.bio
    ? user.bio
    : `Buy ${username} a coffee and support their work.`

  const image = user?.profilepic || undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : undefined,
      type: "profile",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

const Username =  async({ params }) => {
  const{username}=await params
 
  return (
    <>
<PaymentPage username={username}/>
    </>
  )
}

export default Username