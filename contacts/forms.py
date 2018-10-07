from django import forms

class ContactsForm(forms.Form):
    contact_name = forms.CharField(required=True,
        widget=forms.Textarea(attrs={'placeholder': 'YOUR NAME'}))
    contact_email = forms.EmailField(required=True,
        widget=forms.Textarea(attrs={'placeholder': 'YOUR EMAIL'}))
    content = forms.CharField(
        required=True,
        widget=forms.Textarea(attrs={'placeholder': 'YOUR MESSAGE'})
    )

    def __init__(self, *args, **kwargs):
        super(ContactsForm, self).__init__(*args, **kwargs)
        # self.fields['contact_name'].label = "Name:"
        # self.fields['contact_email'].label = "Email:"
        # self.fields['content'].label = "Comment:"