async function signup() {
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('/.netlify/functions/signup.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, email, password })
    });
  
    const result = await res.json();
    console.log(result);
  
    const message = result?.data?.customerCreate?.customerUserErrors?.[0]?.message ||
      "✅ Customer created successfully!";
    document.getElementById("result").innerText = message;
  }
  