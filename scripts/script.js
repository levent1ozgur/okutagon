// function to copy crypto addresses to clipboard
		function copyToClipboard(text) {
			var dummy = document.createElement("textarea");
			document.body.appendChild(dummy);
			dummy.value = text;
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			// show message to inform user that address was copied
			var message = "the address has been copied to your clipboard: " + text;
			alert(message);
		}
