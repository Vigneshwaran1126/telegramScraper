import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
            <h1>Telegram</h1>

            <label>
                Phone Number:
                <input
                    name="phonenumber"
                    type="phonenumber"
                    />
                    <button className="button-btn">Send OTP</button>

            </label>

            <label>
                OTP:
                <input
                    name="otp"
                    type="otp"
                    />
            </label>

            <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
