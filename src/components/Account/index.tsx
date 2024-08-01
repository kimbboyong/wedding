import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./account.module.css";
import Swal from "sweetalert2";

type AccountType = {
  id: number;
  user: string;
  accountList: {
    id: number;
    name: string;
    accountName: string;
    accountNumber: string;
  }[];
};

const Account = () => {
  const accountData: AccountType[] = [
    {
      id: 0,
      user: "신랑측",
      accountList: [
        {
          id: 0,
          name: "홍길동",
          accountName: "토스뱅크",
          accountNumber: "123-456-7890",
        },
        {
          id: 1,
          name: "홍길삼",
          accountName: "우리은행",
          accountNumber: "1002-456-7890",
        },
      ],
    },
    {
      id: 1,
      user: "신부측",
      accountList: [
        {
          id: 0,
          name: "홍길녀",
          accountName: "농협",
          accountNumber: "456-789-1011",
        },
      ],
    },
  ];

  const accountCopy = (account: string) => {
    Swal.fire({
      text: "복사가 완료 되었습니다.",
      icon: "success",
    }).then(() => {
      navigator.clipboard.writeText(account);
    });
  };

  return (
    <>
      {accountData.map((list) => (
        <Accordion
          key={list.id}
          sx={{ marginBottom: 1, boxShadow: "none" }}
          className={styles.accodion}
        >
          <AccordionSummary
            sx={{ bgcolor: "#f3f3f3" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
          >
            {list.user} 계좌
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "16px",
            }}
          >
            {list.accountList.map((account) => (
              <Box
                key={account.id}
                sx={{ marginBottom: 2 }}
                className={styles.accountList}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom>
                      {account.accountName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {account.accountNumber}
                    </Typography>
                  </Box>
                  <Typography
                    variant="button"
                    onClick={() => accountCopy(account.accountNumber)}
                  >
                    복사하기
                  </Typography>
                </Box>
                <Typography variant="body2">{account.name}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Account;
