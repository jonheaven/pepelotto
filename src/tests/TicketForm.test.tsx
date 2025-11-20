import { render, screen, fireEvent } from '@testing-library/react';
import TicketForm from '../components/TicketForm';
import { type Lottery } from '../types';

const mockLottery: Lottery = {
  id: 'Pepe69_420_20250910',
  name: 'Main Pepe69/420 #1',
  type: 'multi-pick',
  ticketPrice: '2500000000',
  maxTickets: 100,
  minTickets: 5,
  seedStake: '5000000000',
  prizePool: '0',
  drawBlock: 1440,
  winnerStyle: 'rollover',
  rolloverKFactor: 0.86,
  partialsEnabled: true,
  creator: 'mock_addr',
  protocolFee: '0',
  protocolWallet: 'mock_wallet',
  charitySplit: 10
};

describe('TicketForm', () => {
  it('renders Quick Pick button for multi-pick', () => {
    render(<TicketForm lottery={mockLottery} address="mock_address" onMint={jest.fn()} />);
    expect(screen.getByText('Quick Pick 69!')).toBeInTheDocument();
  });

  it('alerts if not enough picks', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation();
    render(<TicketForm lottery={mockLottery} address="mock_address" onMint={jest.fn()} />);
    fireEvent.click(screen.getByText('Mint Ticket'));
    expect(alert).toHaveBeenCalledWith('Need exactly 69 numbers, pepe!');
    alert.mockRestore();
  });
});
