import React from 'react'
import CertificatesList from './certificates-list'

export default function CertificateContainer() {
  return (
    <div className='grid grid-cols-3 gap-1 lg:gap-4'>
        <CertificatesList />
    </div>
  )
}
