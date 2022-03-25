import AcUnitIcon from "@mui/icons-material/AcUnit";

const Header = ({ isLogin, isWalletLogin }) => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 text-red bg-NavbarColor">
      <div className="text-HighlightColor">
        <AcUnitIcon fontSize="large" />
      </div>
      <div>
        {isLogin ? (
          !isWalletLogin && <button className="bg-HighlightColor text-NavbarColor rounded-lg px-4 py-2">Connect Wallet</button>
        ) : (
          <button className="bg-HighlightColor text-NavbarColor rounded-lg px-4 py-2">Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
