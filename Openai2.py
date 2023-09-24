import pandas as pd
import openai

api_key = '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'
openai.api_key = api_key
prompt = input("Enter your prompt: ")
file_path = input("Enter the file path for the CSV data: ")

try:
  
    df = pd.read_csv(file_path)

    prompt_with_data = f"Here is the data from the CSV file:\n{df.head()}\n\n{prompt}"


    response = openai.Completion.create(
        engine="text-davinci-003",  
        prompt=prompt_with_data,
        max_tokens=50 
    )

    
    analysis_result = response.choices[0].text
    print(analysis_result)

except FileNotFoundError:
    print("File not found. Please check the file path.")
except Exception as e:
    print(f"An error occurred: {str(e)}")
