import { overflowController } from './overflow'

it('should works', () => {
  overflowController.enter(1)
  expect(overflowController.stack.length).toBe(1)

  overflowController.exit(1)
  expect(overflowController.stack.length).toBe(0)
})

it('should works with multiple calls', () => {
  // mock
  document.body.style.overflow = 'scroll'

  overflowController.enter(123)
  overflowController.enter(789)
  expect(overflowController.stack.length).toBe(2)
  expect(document.body.style.overflow).toBe('hidden')

  // wrong id
  overflowController.exit(1)
  expect(overflowController.stack.length).toBe(2)

  overflowController.exit(123)
  expect(overflowController.stack[0]).toBe(789)
  expect(document.body.style.overflow).toBe('hidden')

  overflowController.exit(789)
  expect(document.body.style.overflow).toBe('scroll')

  // recover
  document.body.style.overflow = ''
})
