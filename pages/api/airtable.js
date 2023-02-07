import Airtable from 'airtable';


// const apiKey = process.env.AIRTABLE_API_KEY;
const baseID = process.env.AIRTABLE_BASE_ID;


export default async function submitFormData(data, submissionStatus, setSubmissionStatus) {
    
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
    
    try {
        const formData = await base(process.env.AIRTABLE_TABLE_NAME).create({
            "Name": data.name,
            "Email": data.email,
            "Contact No": data.phone,
            "Message": data.message,
        });
        console.log(formData.id);
        setSubmissionStatus('submitted')
        // console.log(process.env.AIRTABLE_API_KEY)
    } catch (error) {
        console.error(error);
        setSubmissionStatus('failed')
    }
  }