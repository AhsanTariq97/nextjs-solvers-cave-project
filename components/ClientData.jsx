import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyseJFJ5qK4eWstH' }).base('appf9h210Zq6OVaX0');

  export default async function submitFormData(data, submissionStatus, setSubmissionStatus) {
    try {
      const formData = await base('Form Data').create({
        "Name": data.name,
        "Email": data.email,
        "Contact No": data.phone,
        "Message": data.message,
      });
      console.log(formData.id);
      setSubmissionStatus('submitted')
    } catch (error) {
        console.error(error);
        setSubmissionStatus('failed')
    }
  }