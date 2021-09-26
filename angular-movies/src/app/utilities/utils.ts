export function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function parseWebAPIErrors(response: any) {
  const result: string[] = [];

  if (response.error) {
    if (typeof response.error === 'string') {
      result.push(response.error);
    } else if (Array.isArray(response.error)) {
      response.error.forEach((value) => result.push(value.description));
    } else {
      const mapErrors = response.error.errors;
      const entries = Object.entries(mapErrors);
      entries.forEach((arr: any[]) => {
        const field = arr[0];
        arr[1].forEach((errorMessage) => {
          result.push(`${field}: ${errorMessage}`);
        });
      });
    }
  }

  return result;
}

export function formatDateFormData(date: Date) {
  const formattedDate = new Date(date);
  const format = new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const [{ value: month }, , { value: day }, , { value: year }] =
    format.formatToParts(formattedDate);

  return `${year}-${month}-${day}`;
}
