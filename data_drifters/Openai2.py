import pandas as pd
import openai
import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox

# Initialize the Tkinter window
root = tk.Tk()
root.title("OpenAI Analysis")

# Function to handle the "Analyze" button click
def analyze():
    # Get the user's input from the GUI
    prompt = prompt_entry.get()
    file_path = file_path_entry.get()

    try:
        # Read the CSV file
        df = pd.read_csv(file_path)

        # Create a prompt with the CSV data
        prompt_with_data = f"Here is the data from the CSV file:\n{df.head()}\n\n{prompt}"

        # Make the OpenAI API request with a higher token limit (100)
        openai.api_key='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'
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt_with_data,
            max_tokens=100  # Increased token limit
        )

        # Get the analysis result from the API response
        analysis_result = response.choices[0].text

        # Display the analysis result in a message box
        messagebox.showinfo("Analysis Result", analysis_result)

    except FileNotFoundError:
        messagebox.showerror("Error", "File not found. Please check the file path.")
    except Exception as e:
        messagebox.showerror("Error", f"An error occurred: {str(e)}")

# Create and configure GUI elements
prompt_label = tk.Label(root, text="Enter your prompt:")
prompt_entry = tk.Entry(root, width=50)
file_path_label = tk.Label(root, text="Enter the file path for the CSV data:")
file_path_entry = tk.Entry(root, width=50)
analyze_button = tk.Button(root, text="Analyze", command=analyze)

# Pack GUI elements
prompt_label.pack()
prompt_entry.pack()
file_path_label.pack()
file_path_entry.pack()
analyze_button.pack()

# Start the Tkinter main loop
root.mainloop()
