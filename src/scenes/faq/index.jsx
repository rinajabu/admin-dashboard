import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Facts About Me" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        My name and current position
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Rina Joy Abu, Software Engineer at Sempre.ai
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Technologies I'm currently working with
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React.js | Redux | Next.js | Python | Flask | MySQL | SQLAlchemy | Redis | Cypress | HTML | CSS | Javascript | SASS | Bootstrap | Material UI | AWS | Slack | Microsoft Teams | Jira | Figma
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Description of me as a software engineer
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I am a Software Engineer with expertise in React.js, Redux, Next.js, Python, Flask, SQL, Redis, CSS/SASS, HTML, and Javascript. I am enthusiastic about developing practical and time-saving software solutions. Adept at identifying issues with existing software and creating innovative new software programs. Committed to working within client and project specifications to deliver cost-effective, timely results.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Projects
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magni, cumque sunt inventore maxime, illo eligendi reiciendis doloribus blanditiis, voluptatem delectus eius vero atque! A dolores nulla commodi animi ex velit unde accusamus architecto beatae sit doloribus, quia numquam inventore sunt reiciendis eos maxime corporis vel corrupti recusandae quo in.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;