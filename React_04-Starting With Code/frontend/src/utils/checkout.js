import axios from "axios";

const checkout = async (finalAmount) => {
  const {
    data: { key },
  } = await axios.get("http://localhost:7000/api/getkey");

  const {
    data: { order },
  } = await axios.post("http://localhost:7000/api/checkout", {
    finalAmount,
  });
  console.log(order);

  const options = {
    key,
    amount: order.amount,
    currency: "INR",
    name: "hungryHub",
    description: "Test Transaction from hungryHub",
    image: "https://example.com/your_logo",
    order_id: order.id,
    callback_url: "http://localhost:7000/api/paymentverification",
    prefill: {
      name: "Test1",
      email: "Test1@gmail.com",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#121111",
    },
  };
  const razor = new window.Razorpay(options);
  razor.open();
};

export default checkout;
