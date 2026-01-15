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
