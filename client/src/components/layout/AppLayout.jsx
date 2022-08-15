import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import authUtils from '../../utils/authUtils'
import { Box } from '@mui/material'
import Loading from '../common/Loading'
import Sidebar from '../common/Sidebar'

const AppLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated()

      if (!user) {
        navigate('/login')
      } else {
        //saveUser
        setLoading(false)
      }
    }
    checkAuth()
  }, [navigate])

  return (
    loading ? (
      <Loading fullHeight />
    ) : (
      <Box sx={{
        display: 'flex'
      }}>
        <Sidebar />
        <Box sx={{
          flexGrow: 1,
          p: 1,
          width: 'max-content'
        }}>
          <Outlet />
        </Box>
      </Box>
    )
  )
}

export default AppLayout