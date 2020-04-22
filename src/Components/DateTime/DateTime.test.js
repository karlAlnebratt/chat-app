import React from 'react'
import {
  act,
  cleanup,
  render,
} from '@testing-library/react'
import { sub } from 'date-fns'
import DateTime from './'

const date = new Date()

describe('DateTime', () => {
  afterEach(cleanup)
  test('Renders text relative form now', async () => {
    const result = sub(date, {
      seconds: 20
    })
    await act(async () => {
      const { getByText } = render(
        <DateTime dateString={result.toISOString()} />
      )
      const linkElement = getByText(/less than a minute /i)
      expect(linkElement).toBeInTheDocument()
    })
  })

