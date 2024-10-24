import Button from "./Button.jsx"
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddCardIcon from '@mui/icons-material/AddCard';
import SendIcon from '@mui/icons-material/Send';

export default function Category() {
  return(
    <div className="flex justify-between p-3 mt-3">
      <Button title="Transfer" logo={<SendIcon/>}/>
      <Button title="Payment" logo={<PaymentsIcon/>}/>
      <Button title="Top up" logo={<AddCardIcon/>}/>
    </div>
    )
}