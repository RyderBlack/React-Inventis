import React from 'react';

const Form = () => (
    <form>
        <label>
        Nom:
        <input type="text" name="name" />
        </label>
        <br />
        
        <label>
        Reference:
        <input type="text" name="reference" />
        </label>
        <br />

        <label>
        Nom:
        <input type="text" name="name" />
        </label>

        <div>
        <label for="pic">Photo:</label>
        <input type="file"
               id="pic" name="pic"
               accept="image/png, image/jpeg" />
        </div>

        <hr />
        <input type="submit" value="Submit" />
    </form>
);

export default Form;