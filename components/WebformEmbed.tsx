"use client";

import React, { useEffect, useRef } from 'react';

const WebformEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  const formSnippet = `
<style>
    .crm-webform-wrapper { all: initial; font-family: Arial, sans-serif; }
    .crm-webform-container { max-width: 650px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #eef0f2; }
    .crm-webform-container * { box-sizing: border-box; font-family: inherit; }
    .crm-form-header { font-size: 24px; font-weight: 700; color: #1a2e5a; margin-bottom: 25px; text-align: center; background: transparent; padding: 10px; border-radius: 6px;}
    .crm-form-row { display: flex; flex-wrap: wrap; gap: 15px; }
    .crm-form-group { margin-bottom: 15px; display: flex; flex-direction: column; }
    .crm-form-label { display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #333333; }
    .crm-form-help-text { font-size: 11px; color: #6b7280; margin-top: 5px; }
    .crm-form-input { padding: 12px; background: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; line-height: 1.5; color: #333333; transition: border-color 0.2s; }
    .crm-form-input:focus { outline: none; border-color: #365486 !important; box-shadow: 0 0 0 3px rgba(0,0,0,0.05); }
    
    .crm-form-footer { display: flex; justify-content: center; width: 100%; margin-top: 20px; }
    .crm-form-submit { background: #365486; color: #ffffff; padding: 14px 30px; height: auto; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%; font-size: 16px; transition: opacity 0.2s; }
    .crm-form-submit:hover { opacity: 0.85; }
    .crm-form-submit:disabled { opacity: 0.6; cursor: not-allowed; }
    
    .crm-message-box { display: none; margin-top: 20px; padding: 15px; border-radius: 6px; background: #ecfdf5; color: #234e52; text-align: center; font-weight: 500; font-size: 15px;}
    @media (max-width: 600px) { .crm-form-group { flex: 1 1 100% !important; max-width: 100% !important; min-width: 100% !important; } .crm-webform-container { padding: 25px 20px; } }
</style>

<div class="crm-webform-wrapper">
    <div class="crm-webform-container" id="crm-container-cmoaaz5c30000s81daqey053e">
        <div class="crm-form-header">Signup</div>
        <form id="crm-webform-cmoaaz5c30000s81daqey053e" enctype="multipart/form-data">
            <input type="hidden" name="webformId" value="cmoaaz5c30000s81daqey053e" />
            <input type="hidden" name="module" value="Leads" />
            <div class="crm-form-row">
            <div class="crm-form-group" style="flex: 1 1 100%; max-width: 100%; min-width: 200px;">
                <label for="crm_firstName_cmoaaz5c30000s81daqey053e" class="crm-form-label">First Name <span style="color:#dc3545; margin-left:3px;">*</span></label>
                <input id="crm_firstName_cmoaaz5c30000s81daqey053e" type="text" name="firstName" required class="crm-form-input" placeholder="" style="width: 100%; height: auto; " />
                
            </div>
            <div class="crm-form-group" style="flex: 1 1 100%; max-width: 100%; min-width: 200px;">
                <label for="crm_lastName_cmoaaz5c30000s81daqey053e" class="crm-form-label">Last Name <span style="color:#dc3545; margin-left:3px;">*</span></label>
                <input id="crm_lastName_cmoaaz5c30000s81daqey053e" type="text" name="lastName" required class="crm-form-input" placeholder="" style="width: 100%; height: auto; " />
                
            </div>
            <div class="crm-form-group" style="flex: 1 1 100%; max-width: 100%; min-width: 200px;">
                <label for="crm_company_cmoaaz5c30000s81daqey053e" class="crm-form-label">Company </label>
                <input id="crm_company_cmoaaz5c30000s81daqey053e" type="text" name="company"  class="crm-form-input" placeholder="" style="width: 100%; height: auto; " />
                
            </div>
            <div class="crm-form-group" style="flex: 1 1 100%; max-width: 100%; min-width: 200px;">
                <label for="crm_email_cmoaaz5c30000s81daqey053e" class="crm-form-label">Email <span style="color:#dc3545; margin-left:3px;">*</span></label>
                <input id="crm_email_cmoaaz5c30000s81daqey053e" type="text" name="email" required class="crm-form-input" placeholder="" style="width: 100%; height: auto; " />
                
            </div>
            <div class="crm-form-group" style="flex: 1 1 100%; max-width: 100%; min-width: 200px;">
                <label for="crm_phone_cmoaaz5c30000s81daqey053e" class="crm-form-label">Phone <span style="color:#dc3545; margin-left:3px;">*</span></label>
                <input id="crm_phone_cmoaaz5c30000s81daqey053e" type="text" name="phone" required class="crm-form-input" placeholder="" style="width: 100%; height: auto; " />
                
            </div></div>
            <div class="crm-form-footer"><button type="submit" class="crm-form-submit">Submit</button></div>
        </form>
        <div id="crm-form-message-cmoaaz5c30000s81daqey053e" class="crm-message-box"></div>
    </div>
</div>

<script>
document.getElementById('crm-webform-cmoaaz5c30000s81daqey053e').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('button[type="submit"]');
    var msgDiv = document.getElementById('crm-form-message-cmoaaz5c30000s81daqey053e');
    
    // File upload validation
    var fileInputs = form.querySelectorAll('input[type="file"]');
    for (var i = 0; i < fileInputs.length; i++) {
        var fileInput = fileInputs[i];
        var file = fileInput.files[0];
        if (file) {
            // Check file size
            var maxSizeMB = fileInput.getAttribute('data-max-size');
            if (maxSizeMB) {
                var maxSizeBytes = parseInt(maxSizeMB) * 1024 * 1024;
                if (file.size > maxSizeBytes) {
                    msgDiv.style.display = 'block';
                    msgDiv.style.backgroundColor = '#fef2f2';
                    msgDiv.style.color = '#991b1b';
                    msgDiv.innerText = 'Error: File "' + file.name + '" exceeds the maximum size of ' + maxSizeMB + 'MB.';
                    return;
                }
            }
            // Check file type
            var allowedTypes = fileInput.getAttribute('data-file-types');
            if (allowedTypes) {
                var typesArray = allowedTypes.split(',');
                var fileExt = file.name.split('.').pop().toLowerCase();
                var fileType = file.type.split('/')[0];
                var isAllowed = false;
                
                for (var j = 0; j < typesArray.length; j++) {
                    var type = typesArray[j].trim();
                    if (type === 'Images' && (['jpg','jpeg','png','gif','webp'].includes(fileExt) || fileType === 'image')) { isAllowed = true; break; }
                    if (type === 'Documents' && (['doc','docx','txt','rtf'].includes(fileExt) || fileType === 'application')) { isAllowed = true; break; }
                    if (type === 'PDF' && (fileExt === 'pdf' || file.type === 'application/pdf')) { isAllowed = true; break; }
                    if (type === 'Spreadsheets' && (['xls','xlsx','csv'].includes(fileExt) || file.type.includes('spreadsheet'))) { isAllowed = true; break; }
                }
                
                if (!isAllowed) {
                    msgDiv.style.display = 'block';
                    msgDiv.style.backgroundColor = '#fef2f2';
                    msgDiv.style.color = '#991b1b';
                    msgDiv.innerText = 'Error: File type "' + fileExt + '" is not allowed for "' + fileInput.name + '". Allowed types: ' + allowedTypes + '.';
                    return;
                }
            }
        }
    }
    
    var formData = new FormData(form);
    var data = {};
    formData.forEach((value, key) => { if(key !== 'webformId' && key !== 'module') { data[key] = value; } });
    btn.disabled = true;
    btn.innerText = 'Submitting...';
    fetch('/cm/api/webform-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({webformId: 'cmoaaz5c30000s81daqey053e', fields: data})
    }).then(response => response.json()).then(result => {
        if(result.success || result.message === "Form submitted successfully") { form.style.display = 'none'; msgDiv.style.display = 'block'; msgDiv.innerText = 'Thank you! Your submission has been received.'; } else { throw new Error(result.message || 'Submission failed'); }
    }).catch(error => {
        msgDiv.style.display = 'block'; msgDiv.style.backgroundColor = '#fef2f2'; msgDiv.style.color = '#991b1b'; msgDiv.innerText = 'Error: ' + error.message;
        btn.disabled = false; btn.innerText = 'Submit';
    });
});
</script>
  `;

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Clear previous content
    containerRef.current.innerHTML = '';

    // 2. Parse the snippet
    const parser = new DOMParser();
    const doc = parser.parseFromString(formSnippet, 'text/html');

    // 3. Inject Styles into head
    const styleBlock = doc.querySelector('style');
    if (styleBlock) {
      const newStyle = document.createElement('style');
      newStyle.textContent = styleBlock.textContent;
      newStyle.setAttribute('data-gems-crm-style', 'true');
      document.head.appendChild(newStyle);
    }

    // 4. Render HTML into container
    const formHtml = doc.querySelector('.crm-webform-wrapper');
    if (formHtml) {
      containerRef.current.innerHTML = formHtml.outerHTML;
    }

    // 5. Re-attach Scripts with URL replacement
    const scriptBlock = doc.querySelector('script');
    if (scriptBlock) {
      const newScript = document.createElement('script');
      let scriptContent = scriptBlock.textContent || '';

      // Replace relative URL with full CRM base URL
      // Replace relative URL with full CRM base URL (ensuring no double slashes)
      let crmBaseUrl = process.env.NEXT_PUBLIC_CRM_BASE_URL || 'https://your-crm-domain.com';
      if (crmBaseUrl.endsWith('/')) crmBaseUrl = crmBaseUrl.slice(0, -1);
      
      scriptContent = scriptContent.replace(
        "'/cm/api/webform-submissions'",
        `'${crmBaseUrl}/cm/api/webform-submissions'`
      );

      newScript.textContent = scriptContent;
      containerRef.current.appendChild(newScript);
    }

    return () => {
      // Cleanup style block on unmount
      const existingStyle = document.head.querySelector('[data-gems-crm-style]');
      if (existingStyle) existingStyle.remove();
    };
  }, [formSnippet]);

  return (
    <div className="w-full max-w-lg mx-auto relative group">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      {/* The Glassmorphism Card */}
      <div className="p-4 sm:p-8 rounded-[20px] z-10">
        <div ref={containerRef} className="min-h-[300px]">
          {/* Loading state or placeholder */}
          <div className="animate-pulse flex flex-col gap-4 w-full">
            <div className="h-8 bg-white/5 rounded w-3/4" />
            <div className="h-4 bg-white/5 rounded w-1/2" />
            <div className="h-12 bg-white/5 rounded w-full mt-4" />
            <div className="h-12 bg-white/5 rounded w-full" />
            <div className="h-12 bg-white/5 rounded w-full" />
            <div className="h-14 bg-teal/10 rounded w-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebformEmbed;
