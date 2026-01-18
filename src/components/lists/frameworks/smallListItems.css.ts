import { style } from '@vanilla-extract/css';

export const card = style({
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  padding: '16px',
  margin: '12px 0',
});

export const row = style({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
});

export const label = style({
  fontWeight: 'bold',
  marginRight: '4px',
});
