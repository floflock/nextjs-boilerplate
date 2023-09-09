import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { Metadata } from 'next'
import RedisClient from '@/src/redis/RedisClient'
import { cookies } from 'next/headers'
import { Button } from '@mui/material'

export const metadata: Metadata = {
  title: 'test'
}

type Props = {
  params: {
    locale: string
  }
}

export default function Page({ params }: Props) {
  console.log(params)

  async function setSession() {
    'use server'

    const client = new RedisClient()
    const sessionId = cookies().get('kss')?.value

    if (client && client.instance && sessionId) {
      await client.instance.set(sessionId, 'Hello')
    }

    return null
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <Alert
          severity='info'
          sx={{ mt: 2, mb: 5 }}
        >
          <AlertTitle>Hello 👋</AlertTitle>
          This app uses the Next.js App Router and Material UI v5.
        </Alert>
        <form action={setSession}>
          <Button type='submit'>Create Session</Button>
        </form>
      </div>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0
          }
        }}
        variant='permanent'
        anchor='right'
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography
              variant='overline'
              sx={{ fontWeight: 500 }}
            >
              On this page
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
