// Main Script for Shakespeare Insult Generator

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    const copyBtn = document.getElementById('copyBtn');
    const categorySelect = document.getElementById('category');
    const insultDisplay = document.getElementById('insultDisplay');
    const actionButtons = document.getElementById('actionButtons');
    const insultText = document.getElementById('insultText');
    const playCitation = document.getElementById('playCitation');
    const categoryTag = document.getElementById('categoryTag');
    
    let currentInsult = null;

    // Generate insult
    function generateInsult() {
        console.log("Generate button clicked!");
        const selectedCategory = categorySelect.value;
        console.log("Selected category:", selectedCategory);
        
        // Check if the function exists
        if (typeof getInsultByCategory !== 'function') {
            console.error("getInsultByCategory function not found!");
            insultText.textContent = "Error: Insults database not loaded properly.";
            return;
        }
        
        currentInsult = getInsultByCategory(selectedCategory);
        console.log("Got insult:", currentInsult);
        
        if (currentInsult) {
            displayInsult(currentInsult);
        } else {
            console.error("No insult returned!");
            insultText.textContent = "No insults found for this category.";
        }
    }

    // Display insult with animation
    function displayInsult(insult) {
        console.log("Displaying insult:", insult);
        
        // Update content
        insultText.textContent = `"${insult.text}"`;
        playCitation.textContent = `— ${insult.play}`;
        
        if (insult.category) {
            categoryTag.textContent = getCategoryDisplayName(insult.category);
            categoryTag.style.display = 'inline-block';
        } else {
            categoryTag.style.display = 'none';
        }
        
        // Show action buttons if not already visible
        if (!tryAgainBtn || !copyBtn) {
            console.error("Action buttons not found!");
            return;
        }
        
        // Add animation
        insultDisplay.classList.add('fade-in');
        
        // Show action buttons by adding them if they don't exist
        if (actionButtons.children.length === 0) {
            actionButtons.innerHTML = `
                <button id="tryAgainBtn" class="secondary-btn">Try Another</button>
                <button id="copyBtn" class="secondary-btn">Copy to Clipboard</button>
            `;
            
            // Re-attach event listeners
            document.getElementById('tryAgainBtn').addEventListener('click', generateInsult);
            document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
        }
        
        // Remove animation class after it completes
        setTimeout(() => {
            insultDisplay.classList.remove('fade-in');
        }, 500);
    }

    // Copy to clipboard
    function copyToClipboard() {
        if (currentInsult) {
            const textToCopy = `${currentInsult.text}\n— ${currentInsult.play}`;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Change button text temporarily
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.background = '#27ae60';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy to clipboard');
            });
        }
    }

    // Event listeners
    generateBtn.addEventListener('click', generateInsult);
    tryAgainBtn.addEventListener('click', generateInsult);
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Allow Enter key to generate
    categorySelect.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateInsult();
        }
    });
    
    console.log("Shakespeare Insult Generator initialized!");
    console.log("getInsultByCategory available?", typeof getInsultByCategory);
});

// Build Your Own Insult Functionality
document.addEventListener('DOMContentLoaded', function() {
    const column1Select = document.getElementById('column1');
    const column2Select = document.getElementById('column2');
    const column3Select = document.getElementById('column3');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const buildInsultBtn = document.getElementById('buildInsultBtn');
    const customInsultDisplay = document.getElementById('customInsultDisplay');
    const customInsultText = document.getElementById('customInsultText');
    const copyCustomBtn = document.getElementById('copyCustomBtn');
    
    // Populate dropdowns
    function populateDropdowns() {
        if (typeof buildYourOwnWords === 'undefined') {
            console.error("Build Your Own data not loaded!");
            return;
        }
        
        // Populate Column 1
        buildYourOwnWords.column1.forEach(word => {
            const option = document.createElement('option');
            option.value = word;
            option.textContent = word;
            column1Select.appendChild(option);
        });
        
        // Populate Column 2
        buildYourOwnWords.column2.forEach(word => {
            const option = document.createElement('option');
            option.value = word;
            option.textContent = word;
            column2Select.appendChild(option);
        });
        
        // Populate Column 3
        buildYourOwnWords.column3.forEach(word => {
            const option = document.createElement('option');
            option.value = word;
            option.textContent = word;
            column3Select.appendChild(option);
        });
        
        console.log("Build Your Own dropdowns populated!");
    }
    
    // Randomize selections
    function randomizeSelections() {
        const word1 = getRandomWord(1);
        const word2 = getRandomWord(2);
        const word3 = getRandomWord(3);
        
        column1Select.value = word1;
        column2Select.value = word2;
        column3Select.value = word3;
        
        // Automatically build the insult
        buildCustomInsult();
    }
    
    // Build custom insult from selections
    function buildCustomInsult() {
        const word1 = column1Select.value;
        const word2 = column2Select.value;
        const word3 = column3Select.value;
        
        if (!word1 || !word2 || !word3) {
            alert("Please select a word from each column!");
            return;
        }
        
        const customInsult = `Thou ${word1} ${word2} ${word3}!`;
        
        customInsultText.textContent = `"${customInsult}"`;
        customInsultDisplay.classList.remove('hidden');
        customInsultDisplay.classList.add('fade-in');
        
        setTimeout(() => {
            customInsultDisplay.classList.remove('fade-in');
        }, 500);
    }
    
    // Copy custom insult to clipboard
    function copyCustomInsult() {
        const insultText = customInsultText.textContent.replace(/"/g, '');
        
        navigator.clipboard.writeText(insultText).then(() => {
            const originalText = copyCustomBtn.textContent;
            copyCustomBtn.textContent = 'Copied!';
            copyCustomBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                copyCustomBtn.textContent = originalText;
                copyCustomBtn.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy to clipboard');
        });
    }
    
    // Event listeners
    if (randomizeBtn) randomizeBtn.addEventListener('click', randomizeSelections);
    if (buildInsultBtn) buildInsultBtn.addEventListener('click', buildCustomInsult);
    if (copyCustomBtn) copyCustomBtn.addEventListener('click', copyCustomInsult);
    
    // Allow selections to trigger build
    if (column1Select) column1Select.addEventListener('change', function() {
        if (column1Select.value && column2Select.value && column3Select.value) {
            buildCustomInsult();
        }
    });
    
    if (column2Select) column2Select.addEventListener('change', function() {
        if (column1Select.value && column2Select.value && column3Select.value) {
            buildCustomInsult();
        }
    });
    
    if (column3Select) column3Select.addEventListener('change', function() {
        if (column1Select.value && column2Select.value && column3Select.value) {
            buildCustomInsult();
        }
    });
    
    // Initialize
    populateDropdowns();
    
    console.log("Build Your Own initialized!");
});
