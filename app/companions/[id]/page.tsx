"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function CompanionSession() {
  const {id}=useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default CompanionSession
